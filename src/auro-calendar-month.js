import styleCss from "./style-auro-calendar-month-css";
import { html } from 'lit';

// import { RangeDatepickerCalendar } from '../node_modules/wc-range-datepicker/dist/src/range-datepicker-calendar.js';
import { RangeDatepickerCalendar } from './../vendor/wc-range-datepicker/range-datepicker-calendar';
import './auro-calendar-cell';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"

/* eslint-disable no-self-assign, no-magic-numbers, dot-location */

// class AuroCalendar extends LitElement {
export class AuroCalendarMonth extends RangeDatepickerCalendar {
  // constructor() {
  //   super();
  // }

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

  updated(changedProperties) {
    if (changedProperties.has('year') || changedProperties.has('month')) {
      this.yearAndMonthChanged(this.year, this.month);
    }
  }
}

if (!customElements.get('auro-calendar-month')) {
  customElements.define('auro-calendar-month', AuroCalendarMonth);
}
