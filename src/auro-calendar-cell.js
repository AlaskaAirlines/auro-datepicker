import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { format, startOfDay } from 'date-fns';
import { enUS } from 'date-fns/esm/locale';

import styleCss from "./style-auro-calendar-cell-css";

import '@alaskaairux/auro-popover';

/* eslint-disable no-magic-numbers, no-underscore-dangle, max-params, no-void, init-declarations, no-extra-parens, arrow-parens, max-lines */

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
    this.renderForDateSlot = false;
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
      dateStr:       { type: String },
      renderForDateSlot: { type: Boolean }
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

  /**
   * Handles selected and hovered states of the calendar cell when the date changes.
   * @private
   * @param {Number} dateFrom - Depart date.
   * @param {Number} dateTo - Return date.
   * @param {Number} hoveredDate - Hovered date.
   * @param {Object} day - An object containing the dateFrom and day of month values.
   * @returns {void}
   */
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
      }

      if (((hoveredDate === day.date || day.date < hoveredDate) && day.date > parsedDateFrom && !parsedDateTo && !Number.isNaN(parsedDateFrom) && parsedDateFrom !== undefined && !this.selected) || (day.date > parsedDateFrom && day.date < parsedDateTo)) {
        this.hovered = true;
      }
    }
  }

  /**
   * Handles user click events and dispatches a custom event.
   * @private
   * @returns {void}
   */
  handleTap() {
    let _a;
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('date-is-selected', {
        detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
      }));
    }
  }

  /**
   * Handles user hover events and dispatches a custom event.
   * @private
   * @returns {void}
   */
  handleHover() {
    let _a;
    this.dispatchEvent(new CustomEvent('date-is-hovered', {
      detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
    }));
  }

  /**
   * Checks if the current date is a valid date depending on the min and max values.
   * @private
   * @param {Object} day - An object containing the dateFrom and day of month values.
   * @param {Number} min - The minimum date value.
   * @param {Number} max - The maximum date value.
   * @param {Array} disabledDays - An array of disabled dates.
   * @returns {Boolean} - True if the date is disabled.
   */
  isEnabled(day, min, max, disabledDays) {
    this.disabled = false;
    if (disabledDays && day && day.date) {
      if (day.date < min || day.date > max || disabledDays.findIndex(disabledDay => parseInt(disabledDay, 10) === day.date) !== -1) {
        this.disabled = true;
        return true;
      }
    }
    return false;
  }

  /**
   * Checks if the current date is the depart date.
   * @private
   * @param {Object} day - An object containing the dateFrom and day of month values.
   * @param {Number} dateFrom - Depart date.
   * @param {Number} dateTo - Return date.
   * @returns {Boolean} True if the date is the depart date.
   */
  isDepartDate(day, dateFrom, dateTo) {
    const parsedDateFrom = parseInt(dateFrom, 10);
    const departTimestamp = startOfDay(parsedDateFrom * 1000) / 1000;

    return this.selected && day.date === departTimestamp && dateTo;
  }

  /**
   * Checks if the current date is the return date.
   * @private
   * @param {Object} day - An object containing the dateFrom and day of month values.
   * @param {Number} dateFrom - Depart date.
   * @param {Number} dateTo - Return date.
   * @returns {Boolean} True if the date is the return date.
   */
  isReturnDate(day, dateFrom, dateTo) {
    const parsedDateTo = parseInt(dateTo, 10);
    const returnTimestamp = startOfDay(parsedDateTo * 1000) / 1000;

    return this.selected && day.date === returnTimestamp && dateFrom;
  }

  /**
   * Determines the title of the auro-calendar-cell.
   * @private
   * @param {Number} date - The date of the auro-calendar-cell.
   * @returns {String} The title of the auro-calendar-cell in the user's locale.
   */
  getTitle(date) {
    if (date === undefined) {
      return '';
    }
    return format(date * 1000, 'PPPP', {
      locale: this.locale,
    });
  }

  /**
   * Gets the name of the date slot.
   * @private
   * @returns {void}
   */
  getDateSlotName() {
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

    this.dateStr = `${month}_${day}_${year}`;
  }

  /**
   * Handles the text content and visibility of the auro-popover.
   * @private
   * @returns {void}
   */
  handlePopoverContent() {
    const popover = this.shadowRoot.querySelector('auro-popover');
    const popoverSpan = this.shadowRoot.querySelector('#popoverSpan');
    const popoverContent = [...this.querySelectorAll('[slot^="popover_"]')];

    const cellDate = new Date(this.day.date * 1000);

    if (popoverContent && popoverContent.length > 0) {
      popoverContent.forEach((content) => {
        const popoverDate = new Date(content.getAttribute('date'));

        if (this.popoverAndCellDatesMatch(popoverDate, cellDate)) {
          popover.removeAttribute('disabled');
        } else {
          popover.setAttribute('disabled', true);
        }
      });
    } else if (!this.disabled) {
      popover.setAttribute('disabled', true);
    }
  }

  /**
   * Helper function to determine if the popover date and cell date match.
   * @private
   * @param {Date} popoverDate - The date of the auro-popover.
   * @param {Date} cellDate - The date of the auro-calendar-cell.
   * @returns {void}
   */
  popoverAndCellDatesMatch(popoverDate, cellDate) {
    return popoverDate.getDate() === cellDate.getDate() && popoverDate.getMonth() === cellDate.getMonth() && popoverDate.getFullYear() === cellDate.getFullYear();
  }

  removeSlotContent(slotContentType) {
    const popover = this.shadowRoot.querySelector('auro-popover');

    const dateSlots = [...this.querySelectorAll('[slot^="date_"]')];
    const popoverSlots = [...this.querySelectorAll('[slot^="popover_"]')];


    if (slotContentType === 'date') {
      if (dateSlots.length > 0) {
        dateSlots.forEach((slot) => {
          slot.remove();
        });
      }
    }

    if (slotContentType === 'popover') {
      if (popoverSlots.length > 0) {
        popoverSlots.forEach((slot) => {
          popover.setAttribute('disabled', true);
          slot.remove();
        });
      }
    }
  }

  updated(properties) {
    if (properties.has('dateFrom') || properties.has('dateTo') || properties.has('hoveredDate') || properties.has('day')) {
      this.dateChanged(this.dateFrom, this.dateTo, this.hoveredDate, this.day);
    }

    if (properties.has('dateStr')) {
      this.handlePopoverContent();
    }

    this.getDateSlotName();
  }

  render() {
    const buttonClasses = {
      'day': true,
      'currentDate': this.currentDate,
      'selected': this.selected,
      'inRange': this.hovered,
      'disabled': this.isEnabled(this.day, this.min, this.max, this.disabledDays),
      'rangeDepartDate': this.isDepartDate(this.day, this.dateFrom, this.dateTo),
      'rangeReturnDate': this.isReturnDate(this.day, this.dateFrom, this.dateTo)
    };

    let _a, _b;
    return html`
      <auro-popover disabled>
        <slot name="popover_${this.dateStr}"></slot>
        <button
          slot="trigger"
          @click="${this.handleTap}"
          @mouseover="${this.handleHover}"
          @focus="${this.handleHover}"
          class="${classMap(buttonClasses)}"
          ?disabled="${this.disabled}"
          title="${this.getTitle((_a = this.day) === null || _a === void 0 ? void 0 : _a.date)}"
          tabindex="-1">
          <div class="buttonWrapper">
            <div class="currentDayMarker">${(_b = this.day) === null || _b === void 0 ? void 0 : _b.title}</div>
            <div class="daySlot" part="daySlot">
              <slot name="date_${this.dateStr}"></slot>
            </div>
          </div>
        </button>
      </auro-popover>
    `;
  }
}

if (!customElements.get('auro-calendar-cell')) {
  customElements.define('auro-calendar-cell', AuroCalendarCell);
}
