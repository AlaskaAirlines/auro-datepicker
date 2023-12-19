import styleCss from "./style-auro-calendar-month-css";
import { html } from 'lit';

import { RangeDatepickerCalendar } from './../vendor/wc-range-datepicker/range-datepicker-calendar';
import './auro-calendar-cell';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"

/* eslint-disable no-self-assign, no-magic-numbers, dot-location */

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

  /**
   * Determines the current month name based on locale.
   * @private
   * @returns {void}
   */
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

  /**
   * Parses the date and popover slot content and separates it by day.
   * @private
   * @returns {void}
   */
  parseDateContentByDay() {
    this.dateSlotContent = [...this.querySelectorAll('[slot^="date_"]')];
    this.popoverSlotContent = [...this.querySelectorAll('[slot^="popover_"]')];

    if (this.dateSlotContent && this.dateSlotContent.length > 0) {
      const items = [];

      this.dateSlotContent.forEach((content) => {
        const date = new Date(content.getAttribute('date'));

        // Puts the date slot content into an array
        items.push({
          date,
          content
        });
      });

      // Groups the date slot content by day
      this.dateSlotContentByDay = _.groupBy(items, ({date}) => date.getDate()); // eslint-disable-line no-undef
    }

    if (this.popoverSlotContent && this.popoverSlotContent.length > 0) {
      const items = [];

      this.popoverSlotContent.forEach((content) => {
        const date = new Date(content.getAttribute('date'));

        // Puts the popover slot content into an array
        items.push({
          date,
          content
        });
      });

      // Groups the popover slot content by day
      this.popoverSlotContentByDay = _.groupBy(items, ({date}) => date.getDate()); // eslint-disable-line no-undef
    }

    this.insertSlotContentByDay();
  }

  /**
   * Inserts the date and popover slot content down to the auro-calendar-cell.
   * @private
   * @returns {void}
   */
  insertSlotContentByDay() {
    const renderedDays = [...this.shadowRoot.querySelectorAll('auro-calendar-cell')];

    renderedDays.forEach((dateCell) => {
      // const day = new Date(dateCell.day.date * 1000).getDate();
      const formattedDate = this.getFormattedDate(dateCell);

      if (this.dateSlotContentByDay) {

        // Sets attribute on date cells to render with extra space for the date slot content
        dateCell.setAttribute('renderForDateSlot', true);
      }

      const insertContent = (slotMap) => {
        if (slotMap.has(formattedDate)) {
          if (slotMap.get(formattedDate).getAttribute('slot').startsWith('date')) {
            dateCell.removeSlotContent('date');
          } else {
            dateCell.removeSlotContent('popover');
          }

          dateCell.appendChild(slotMap.get(formattedDate));
        } else {
          dateCell.removeSlotContent('date');
          dateCell.removeSlotContent('popover');
        }
      };

      insertContent(this.dateSlotMap);
      insertContent(this.popoverSlotMap);
    });
  }

  // Old solution
        // if (this.isSlotContentValid(day, formattedDate, contentMap)) {
        //   // Appends slot content to date cell if it exists
        //   dateCell.appendChild(contentMap[day][0].content);
        // } else if (slotMap.has(formattedDate)) {
        //   // Appends content from slot map if slot content does not exist
        //   dateCell.appendChild(slotMap.get(formattedDate));
        // }


        // 1. Datepicker
        //    a. Slot content is inserted
        //    b. Slot content is moved down to calendar
        // 2. Calendar
        //   a. Receives slot content from datepicker
        //   b. Inserts slot content into a map
        //   c. Separates the content by month
        //   d. Slot content and map content is moved down to month
        // 3. Month
        //   a. Receives slot content and map from calendar
        //   b. Separates the content by day
        //   c. Loop through each day in month
        //      I. Matches map data to cell
        //         #. If match, remove all current slot content from cell
        //            #. Append map content to cell
        //         #. If no match, remove all current slot content from cell
        // 4. Cell

  /**
   * Checks if the slot content exists and matches the current date.
   * @private
   * @param {Date} day - Specific day of the month of the auro-calendar-cell.
   * @param {String} formattedDate - The formatted date of the auro-calendar-cell.
   * @param {Object} slotContentByDay - The slot content grouped by day.
   * @returns {Boolean} True if the slot content exists and matches the current date.
   */
  isSlotContentValid(day, formattedDate, slotContentByDay) {
    return (
      slotContentByDay &&
      slotContentByDay[day] &&
      slotContentByDay[day][0].content.getAttribute('date') === formattedDate
    );
  }

  /**
   * Returns a formatted date of the current auro-calendar-cell date.
   * @private
   * @param {HTMLElement} dateCell - The auro-calendar-cell element.
   * @returns {String} The date in "mm/dd/yyyy" format.
   */
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
