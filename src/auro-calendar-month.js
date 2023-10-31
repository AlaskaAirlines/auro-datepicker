import styleCss from "./style-auro-calendar-month-css";
import { html } from 'lit';

import { RangeDatepickerCalendar } from './../vendor/wc-range-datepicker/range-datepicker-calendar';
import './auro-calendar-cell';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"

/* eslint-disable no-self-assign, no-magic-numbers, dot-location */

// class AuroCalendar extends LitElement {
export class AuroCalendarMonth extends RangeDatepickerCalendar {
  constructor() {
    super();

    this.slotMap = new Map();
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      slotMap: { type: Map }
    };
  }

  static get styles() {
    return [
      // ...super.styles,
      styleCss
    ];
  }

  async firstUpdated() {
    this.monthsList = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ];
    setTimeout(() => {
      this.setYears(1930, 2100);
    });

    await this.updateComplete;
  }

  localeChanged() {
    const dayNamesOfTheWeek = [];
    for (let int = 0; int < 7; int += 1) {
      dayNamesOfTheWeek.push(this.locale.localize.day(int, { width: 'narrow' }));
    }
    const firstDayOfWeek = this.locale.options.weekStartsOn
      ? this.locale.options.weekStartsOn
      : 0;
    const tmp = dayNamesOfTheWeek.slice().splice(0, firstDayOfWeek);
    const newDayNamesOfTheWeek = dayNamesOfTheWeek
      .slice()
      .splice(firstDayOfWeek, dayNamesOfTheWeek.length)
      .concat(tmp);
    this.dayNamesOfTheWeek = newDayNamesOfTheWeek;
  }

  parseDateContentByDay() {
    this.dateSlotContent = [...this.querySelectorAll('[slot^="date_"]')];

    if (this.dateSlotContent && this.dateSlotContent.length > 0) {
      const items = [];

      this.dateSlotContent.forEach((content) => {
        const date = new Date(content.getAttribute('date'));

        items.push({
          date,
          content
        });
      });

      this.slotContentByDay = _.groupBy(items, ({date}) => date.getDate()); // eslint-disable-line no-undef
    }

    this.insertSlotContentByDay();
  }

  insertSlotContentByDay() {
    const renderedDays = [...this.shadowRoot.querySelectorAll('auro-calendar-cell')];

    renderedDays.forEach((dateCell) => {
      const day = new Date(dateCell.day.date * 1000).getDate();
      const dayName = this.getFormattedDate(dateCell);

      if (this.isSlotContentValid(day, dayName, this.slotContentByDay)) {
        dateCell.appendChild(this.slotContentByDay[day][0].content);
      } else if (this.slotMap.has(dayName)) {
        dateCell.appendChild(this.slotMap.get(dayName));
      }
    });
  }

  isSlotContentValid(day, dayName, slotContentByDay) {
    return (
      slotContentByDay &&
      slotContentByDay[day] &&
      slotContentByDay[day][0].content.getAttribute('date') === dayName
    );
  }

  getFormattedDate(dateCell) {
    const date = new Date(dateCell.day.date * 1000);

    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month.toString().length === 1) {
      month = `0${month}`;
    }

    if (day.toString().length === 1) {
      day = `0${day}`;
    }

    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  renderDay(day) {
    return html`
      <div class="td ${this.tdIsEnabled(day)}">
        ${day
          ? html`
            <auro-calendar-cell
              .disabledDays="${this.disabledDays}"
              .min="${this.min}"
              .max="${this.max}"
              .month="${this.month}"
              .hoveredDate="${this.hoveredDate}"
              .dateTo="${this.dateTo}"
              .dateFrom="${this.dateFrom}"
              .locale="${this.locale}"
              .day="${day}"
              ?isCurrentDate="${this.isCurrentDate(day)}"
              @date-is-selected="${this.handleDateSelected}"
              @date-is-hovered="${this.handleDateHovered}"
            >
            </auro-calendar-cell>
          `
          : null}
      </div>
    `;
  }

  async updated(changedProperties) {
    if (changedProperties.has('year') || changedProperties.has('month')) {
      this.yearAndMonthChanged(this.year, this.month);

      await this.updateComplete;

      this.parseDateContentByDay();
    }
  }
}

if (!customElements.get('auro-calendar-month')) {
  customElements.define('auro-calendar-month', AuroCalendarMonth);
}
