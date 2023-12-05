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

    this.dateSlotMap = new Map();
    this.popoverSlotMap = new Map();
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
    this.popoverSlotContent = [...this.querySelectorAll('[slot^="popover_"]')];

    if (this.dateSlotContent && this.dateSlotContent.length > 0) {
      const items = [];

      this.dateSlotContent.forEach((content) => {
        const date = new Date(content.getAttribute('date'));

        items.push({
          date,
          content
        });
      });

      this.dateSlotContentByDay = _.groupBy(items, ({date}) => date.getDate()); // eslint-disable-line no-undef
    }

    if (this.popoverSlotContent && this.popoverSlotContent.length > 0) {
      const items = [];

      this.popoverSlotContent.forEach((content) => {
        const date = new Date(content.getAttribute('date'));

        items.push({
          date,
          content
        });
      });

      this.popoverSlotContentByDay = _.groupBy(items, ({date}) => date.getDate()); // eslint-disable-line no-undef
    }

    this.insertSlotContentByDay();
  }

  insertSlotContentByDay() {
    const renderedDays = [...this.shadowRoot.querySelectorAll('auro-calendar-cell')];

    renderedDays.forEach((dateCell) => {
      const day = new Date(dateCell.day.date * 1000).getDate();
      const dayName = this.getFormattedDate(dateCell);

      if (this.dateSlotContentByDay) {
        dateCell.setAttribute('hasDateSlotContent', true);
      }

      const insertContent = (contentMap, slotMap) => {
        if (this.isSlotContentValid(day, dayName, contentMap)) {
          dateCell.appendChild(contentMap[day][0].content);
        } else if (slotMap.has(dayName)) {
          dateCell.appendChild(slotMap.get(dayName));
        }
      };

      insertContent(this.dateSlotContentByDay, this.dateSlotMap);
      insertContent(this.popoverSlotContentByDay, this.popoverSlotMap);
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

  convertTimestampToDate(timestamp) {
    const month = timestamp.substring(5, 7);
    const day = timestamp.substring(8, 10);
    const year = timestamp.substring(11);

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

  /* Disabling linter for render as this code is directly from range-datepicker-calendar */
  /* eslint-disable */
  render() {
    var _a, _b;
    
    return html `
      <div>
        <div class="header">
          ${this.renderPrevButton()}
          <div class="headerTitle">
            <div>${this.computeCurrentMonthName(this.month, this.year)}</div>
            <div>${this.renderYear()}</div>
          </div>
          ${this.renderNextButton()}
        </div>

        <div class="table">
          <div class="thead">
            <div class="tr">
              ${(_a = this.dayNamesOfTheWeek) === null || _a === void 0 ? void 0 : _a.map(dayNameOfWeek => this.renderDayOfWeek(dayNameOfWeek))}
            </div>
          </div>
          <div class="tbody">
            ${(_b = this.daysOfMonth) === null || _b === void 0 ? void 0 : _b.map(week => this.renderWeek(week))}
          </div>
        </div>
      </div>
    `;
  }
  /* eslint-enable */
}

if (!customElements.get('auro-calendar-month')) {
  customElements.define('auro-calendar-month', AuroCalendarMonth);
}
