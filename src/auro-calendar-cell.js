import { LitElement, html } from 'lit';
import { format, startOfDay } from 'date-fns';
import { enUS } from 'date-fns/esm/locale';

import styleCss from "./style-auro-calendar-cell-css";

/* eslint-disable no-magic-numbers, no-underscore-dangle, max-params, no-void, init-declarations, no-extra-parens, arrow-parens */

export class AuroCalendarCell extends LitElement {
  constructor() {
    super();

    this.day = null;
    this.selected = false;
    this.hovered = false;
    this.dateTo = null;
    this.dateFrom = null;
    this.month = null;
    this.min = null;
    this.max = null;
    this.disabled = false;
    this.disabledDays = [];
    this.hoveredDate = null;
    this.isCurrentDate = false;
    this._locale = null;
    this.dateStr = null;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      day:           { type: Object },
      selected:      { type: Boolean },
      hovered:       { type: Boolean },
      dateTo:        { type: String },
      dateFrom:      { type: String },
      month:         { type: String },
      min:           { type: Number },
      max:           { type: Number },
      disabled:      { type: Boolean },
      disabledDays:  { type: Array },
      hoveredDate:   { type: String },
      isCurrentDate: { type: Boolean },
      locale:        { type: Object },
      dateStr:       { type: String }
    };
  }

  get locale() {
    return this._locale ? this._locale : enUS;
  }

  set locale(value) {
    const oldValue = this._locale;
    this._locale = value;
    this.requestUpdate('locale', oldValue);
  }

  static get styles() {
    return [
      // ...super.styles,
      styleCss
    ];
  }

  dateChanged(dateFrom, dateTo, hoveredDate, day) {
    this.selected = false;
    this.hovered = false;

    const parsedDateFrom = parseInt(dateFrom, 10);
    const parsedDateTo = parseInt(dateTo, 10);

    if (day) {
      const departTimestamp = startOfDay(parsedDateFrom * 1000) / 1000;
      const returnTimestamp = startOfDay(parsedDateTo * 1000) / 1000;

      if (day.date === departTimestamp || day.date === returnTimestamp) {
        this.selected = true;

        const button = this.shadowRoot.querySelector('button');

        if (day.date === departTimestamp) {
          button.classList.add('departDate');
        }

        if (day.date === returnTimestamp) {
          button.classList.add('returnDate');
        }
      }

      if (((hoveredDate === day.date || day.date < hoveredDate) && day.date > parsedDateFrom && !parsedDateTo && !Number.isNaN(parsedDateFrom) && parsedDateFrom !== undefined && !this.selected) || (day.date > parsedDateFrom && day.date < parsedDateTo)) {
        this.hovered = true;
      }
    }
  }

  handleTap() {
    let _a;
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('date-is-selected', {
        detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
      }));
    }
  }

  handleHover() {
    let _a;
    this.dispatchEvent(new CustomEvent('date-is-hovered', {
      detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
    }));
  }

  isSelected(selected) {
    return selected ? 'selected' : '';
  }

  isHovered(hovered) {
    return hovered ? 'inRange' : '';
  }

  isEnabled(day, min, max, disabledDays) {
    this.disabled = false;
    if (disabledDays && day && day.date) {
      if (day.date < min || day.date > max || disabledDays.findIndex(disabledDay => parseInt(disabledDay, 10) === day.date) !== -1) {
        this.disabled = true;
        return 'disabled';
      }
    }
    return '';
  }

  getTitle(date) {
    if (date === undefined) {
      return '';
    }
    return format(date * 1000, 'PPPP', {
      locale: this.locale,
    });
  }

  getSlotName() {
    const date = new Date(this.day.date * 1000);

    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month.toString().length === 1) {
      month = `0${month}`;
    }

    if (day.toString().length === 1) {
      day = `0${day}`;
    }

    const year = date.getFullYear();

    this.dateStr = `date_${month}_${day}_${year}`;
  }

  updated(properties) {
    if (properties.has('dateFrom') || properties.has('dateTo') || properties.has('hoveredDate') || properties.has('day')) {
      this.dateChanged(this.dateFrom, this.dateTo, this.hoveredDate, this.day);
    }

    this.getSlotName();
  }

  render() {
    let _a, _b;
    return html`
      <button
        @click="${this.handleTap}"
        @mouseover="${this.handleHover}"
        @focus="${this.handleHover}"
        class="day ${this.isCurrentDate ? 'currentDate' : ''} ${this.isSelected(this.selected)} ${this.isHovered(this.hovered)} ${this.isEnabled(this.day, this.min, this.max, this.disabledDays)}"
        ?disabled="${this.disabled}"
        title="${this.getTitle((_a = this.day) === null || _a === void 0 ? void 0 : _a.date)}"
        tabindex="-1">
        <div class="currentDayMarker">${(_b = this.day) === null || _b === void 0 ? void 0 : _b.title}</div>
        <div class="daySlot" part="daySlot">
          <slot name="${this.dateStr}"></slot>
        </div>
      </button>
    `;
  }
}

if (!customElements.get('auro-calendar-cell')) {
  customElements.define('auro-calendar-cell', AuroCalendarCell);
}
