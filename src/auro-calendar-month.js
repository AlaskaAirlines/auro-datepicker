import styleCss from "./style-auro-calendar-month-css";
import { html } from 'lit';

import { RangeDatepickerCalendar } from '../node_modules/wc-range-datepicker/dist/src/range-datepicker-calendar.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"

/* eslint-disable no-self-assign */

// class AuroCalendar extends LitElement {
export class AuroCalendarMonth extends RangeDatepickerCalendar {
  constructor() {
    super();
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

  renderDay(day) {
    return html `
      <div class="td ${this.tdIsEnabled(day)}">
        ${day
            ? html `
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

  renderPrevButton() {
    if (this.prev || this.narrow || this.enableYearChange) {
      return html`<auro-icon category="interface" name="chevron-left" @click="${this.handlePrevMonth}"></auro-icon>`
    }
    return null;
  }

  renderNextButton() {
    if (this.next || this.narrow || this.enableYearChange) {
      return html`<auro-icon category="interface" name="chevron-right" @click="${this.handleNextMonth}"></auro-icon>`
    }
    return null;
  } 

  updated(changedProperties) {
    if (changedProperties.has('year') || changedProperties.has('month')) {
      this.yearAndMonthChanged(this.year, this.month);
    }
  }
}
