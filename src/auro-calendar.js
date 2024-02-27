import { html } from 'lit';
import styleCss from "./style-auro-calendar-css";

import './auro-calendar-month.js';
import { RangeDatepicker } from './../vendor/wc-range-datepicker/range-datepicker';
import chevronLeft from '@alaskaairux/icons/dist/icons/interface/chevron-left_es6.js';
import chevronRight from '@alaskaairux/icons/dist/icons/interface/chevron-right_es6.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {Object} firstDayOfWeek - Weekday that will be displayed in first column of month grid.
 * 0: sunday, 1: monday, 2: tuesday, 3: wednesday , 4: thursday, 5: friday, 6: saturday
 * Default is 0.
 * @prop {Date | null} focusedDate - The currently focused date (if any).
 * @prop {Date} maxDate - Maximum date. All dates after will be disabled.
 * @prop {Date} minDate - Minimum date. All dates before will be disabled.
 * @prop {Date | undefined} selectedDate - The selected date, usually synchronized with datepicker-input.
 * Not to be confused with the focused date (therefore not necessarily in active month view).
 * @prop {string} weekdayHeaderNotation - Weekday header notation, based on Intl DatetimeFormat:
 * - 'short' (e.g., Thu)
 * - 'narrow' (e.g., T).
 * Default is 'short'.
 * @event auroCalendar-dateSelected - Notifies that a date has been selected in the calendar.
 * @event auroCalendar-ready - Notifies that the component has finished initializing.
 * @event auroCalendar-monthChanged - Notifies that the visible calendar month(s) have changed.
 */

/* eslint-disable no-self-assign, no-magic-numbers, no-undef-init, no-param-reassign, max-lines */

// class AuroCalendar extends LitElement {
export class AuroCalendar extends RangeDatepicker {
  constructor() {
    super();

    this.numCalendars = 1;
    this.showPrevMonthBtn = true;
    this.showNextMonthBtn = true;
  }

  static get styles() {
    return [
      // ...super.styles,
      styleCss
    ];
  }

  static get properties() {
    return {
      // ...super.properties,
      numCalendars: {
        type: Number
      },
      dateFrom: {
        type: String
      },
      dateTo: {
        type: String
      },
      maxDate: {
        type: String,
        reflect: true
      },
      minDate: {
        type: String,
        reflect: true
      }
    };
  }

  requestDismiss() {
    this.dispatchEvent(new CustomEvent('auroCalendar-dismissRequest', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   * Marks the component as ready and sends event.
   * @private
   * @returns {void}
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroCalendar-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   * Handles the visibility of the previous and next month buttons.
   * @private
   * @returns {void}
   */
  assessNavigationButtonVisibility() {
    // handle earliest month
    if (this.minDate) {
      const firstMonthYear = new Date(`${this.month}/01/${this.year}`);
      const minDateMonth = new Date(this.minDate).getMonth() + 1;
      const minDateYear = new Date(this.minDate).getFullYear();
      const minDateMonthYear = new Date(`${minDateMonth}/01/${minDateYear}`);

      if (firstMonthYear <= minDateMonthYear) {
        this.showPrevMonthBtn = false;
      } else {
        this.showPrevMonthBtn = true;
      }

      this.requestUpdate();
    }

    // handle latest month
    if (this.maxDate) {
      const maxMonth = new Date(this.maxDate).getMonth() + 1;
      const maxYear = new Date(this.maxDate).getFullYear();

      if (maxYear > this.year) {
        this.showNextMonthBtn = true;
      } else {
        let lastViewedMonth = this.month + this.numCalendars - 1;

        if (lastViewedMonth > 12) {
          lastViewedMonth -= 12;
        }

        if (lastViewedMonth === maxMonth) {
          this.showNextMonthBtn = false;
        } else {
          this.showNextMonthBtn = true;
        }
      }
    }
  }

  firstUpdated() {
    // if minDate is defined and it's later than the current month make the calendar view start on the minDate
    if (this.minDate) {
      const minAsDateObj = new Date(this.minDate);
      const minDateMonth = minAsDateObj.getMonth() + 1;
      const minDateYear = minAsDateObj.getFullYear();
      const firstOfMonthForMinDate = new Date(`${minDateMonth}/01/${minDateYear}`);

      if (firstOfMonthForMinDate > new Date(`${this.month}/01/${this.year}`)) {
        this.month = minDateMonth;
        this.year = minDateYear;
      }
    }

    // if maxDate is defined and its earlier than the current month move the view back to the maxDate month
    if (this.maxDate) {
      const maxAsDateObj = new Date(this.maxDate);
      const maxDateMonth = maxAsDateObj.getMonth() + 1;
      const maxDateYear = maxAsDateObj.getFullYear();
      const firstOfMonthForMaxDate = new Date(`${maxDateMonth}/01/${maxDateYear}`);

      if (firstOfMonthForMaxDate < new Date(`${this.month}/01/${this.year}`)) {
        this.month = maxDateMonth;
        this.year = maxDateYear;
      }
    }

    this.addEventListener('date-from-changed', () => {
      this.dispatchEvent(new CustomEvent('auroCalendar-dateSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    });

    this.addEventListener('date-to-changed', () => {
      if (this.dateTo === null) {
        this.dateTo = undefined;
      }
      this.dispatchEvent(new CustomEvent('auroCalendar-dateSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    });

    this.notifyReady();

    this.determineNumCalendars();

    window.addEventListener('resize', () => {
      this.determineNumCalendars();
    });
  }

  updated(changedProperties) {
    if (
      changedProperties.has("minDate") ||
      changedProperties.has("maxDate") ||
      changedProperties.has("month") ||
      changedProperties.has("year")
    ) {
      if (changedProperties.has("month") || changedProperties.has("year")) {
        this.monthChanged(this.month, this.year);
      }
      this.assessNavigationButtonVisibility();
    }
    if (changedProperties.has('noRange')) {
      this.noRangeChanged(this.noRange, changedProperties.get('noRange'));
    }
    if (changedProperties.has('narrow')) {
      this.dispatchEvent(new CustomEvent('narrow-changedProperties', { detail: { value: this.narrow } }));
    }
    if (changedProperties.has('locale')) {
      this.localeChanged();
    }
  }

  /**
   * Handles decrementing and incrementing the rendered calendar month and year.
   * @private
   * @param {Number} month - Month the calendar displays.
   * @param {Number} year - Year the calendar displays.
   * @returns {void}
   */
  monthChanged(month, year) {
    if (year && month) {
      this.monthPlus = (month % 12) + 1; // eslint-disable-line no-extra-parens
      if (this.monthPlus === 1) {
        this.yearPlus = year + 1;
      } else {
        this.yearPlus = year;
      }
      this.notifyMonthChanged(this.month, this.year, this.numCalendars);
    }
  }

  /**
   * Sends event notifying that the visible calendar month(s) have changed.
   * @private
   * @param {Number} month - Month the calendar displays.
   * @param {Number} year - Year the calendar displays.
   * @param {Number} numCalendars - Number of calendars displayed.
   * @returns {void}
   */
  notifyMonthChanged(month, year, numCalendars) {
    this.dispatchEvent(new CustomEvent('auroCalendar-monthChanged', {
      bubbles: false,
      composed: true,
      detail: {
        month,
        year,
        numCalendars,
      },
    }));
  }

  /**
   * Updates the month and year when the user navigates to the previous calendar month.
   * @private
   * @returns {void}
   */
  handlePrevMonth() {
    if (this.month === 1) {
      this.year -= 1;
      this.month = 12;
    } else {
      this.month -= 1;
    }

    this.requestUpdate();
  }

  /**
   * Updates the month and year when the user navigates to the next calendar month.
   * @private
   * @returns {void}
   */
  handleNextMonth() {
    if (this.month === 12) {
      this.year += 1;
      this.month = 1;
    } else {
      this.month += 1;
    }

    this.requestUpdate();
  }

  /**
   * Determines the number of months rendered inside the calendar.
   * @private
   * @returns {void}
   */
  determineNumCalendars() {
    const vw = window.innerWidth;
    let calendarCount = 1;
    let maxCalendars = 1;

    if (!this.noRange) {
      maxCalendars = 2;
    }

    // This numerical value comes from the SCSS variable 'ds-grid-breakpoint-sm' and needs to be changed to use the variable name
    if (vw < 660) {
      maxCalendars = 12;
    }

    // Add calculation to restrict number of calendars based off of min/max date
    if (this.minDate && this.maxDate) {
      const maxAsDate = new Date(this.maxDate);
      const minAsDate = new Date(this.minDate);

      let monthsInRange = undefined;
      monthsInRange = (maxAsDate.getFullYear() - minAsDate.getFullYear()) * 12;
      monthsInRange -= minAsDate.getMonth();
      monthsInRange += maxAsDate.getMonth();
      monthsInRange += 1;

      if (monthsInRange < 1) {
        monthsInRange = 1;
      }

      calendarCount = monthsInRange;
    } else {
      calendarCount = maxCalendars;
    }

    if (calendarCount > maxCalendars) {
      calendarCount = maxCalendars;
    }

    if (this.numCalendars !== calendarCount) {
      this.numCalendars = calendarCount;
      this.requestUpdate();
    }
  }

  /**
   * Renders the auro-calendar-month HTML.
   * @private
   * @param {Number} month - Month the calendar displays.
   * @param {Number} year - Year the calendar displays.
   * @returns {Object} Returns the auro-calendar-month HTML.
   */
  renderCalendar(month, year) {
    if (month > 12) {
      month -= 12;
    }

    if (this.month !== 1 && month < this.month) {
      year += 1;
    }

    return html`
      <auro-calendar-month
        .disabledDays="${this.disabledDays}"
        min="${this.min}"
        max="${this.max}"
        ?noRange="${this.noRange}"
        .hoveredDate="${this.hoveredDate}"
        .dateTo="${this.dateTo}"
        .dateFrom="${this.dateFrom}"
        .locale="${this.locale}"
        month="${month}"
        year="${year}"
        @hovered-date-changed="${this.hoveredDateChanged}"
        @date-from-changed="${this.dateFromChanged}"
        @date-to-changed="${this.dateToChanged}"
      >
      </auro-calendar-month>
    `;
  }

  /**
   * Function to generate checkmark svg.
   * @private
   * @param {Object} icon - Icon object containing the SVG.
   * @returns {Object} Returns the svg portion of the icon object.
   */
  generateIconHtml(icon) {
    this.dom = new DOMParser().parseFromString(icon.svg, 'text/html');
    this.svg = this.dom.body.firstChild;

    return this.svg;
  }

  render() {
    return html`
      <div class="calendars">
        ${this.renderCalendar(this.month, this.year)}
        ${this.numCalendars > 1 ? this.renderCalendar(this.month + 1, this.year) : undefined}
        ${this.numCalendars > 2 ? this.renderCalendar(this.month + 2, this.year) : undefined}
        ${this.numCalendars > 3 ? this.renderCalendar(this.month + 3, this.year) : undefined}
        ${this.numCalendars > 4 ? this.renderCalendar(this.month + 4, this.year) : undefined}
        ${this.numCalendars > 5 ? this.renderCalendar(this.month + 5, this.year) : undefined}
        ${this.numCalendars > 6 ? this.renderCalendar(this.month + 6, this.year) : undefined}
        ${this.numCalendars > 7 ? this.renderCalendar(this.month + 7, this.year) : undefined}
        ${this.numCalendars > 8 ? this.renderCalendar(this.month + 8, this.year) : undefined}
        ${this.numCalendars > 9 ? this.renderCalendar(this.month + 9, this.year) : undefined}
        ${this.numCalendars > 10 ? this.renderCalendar(this.month + 10, this.year) : undefined}
        ${this.numCalendars > 11 ? this.renderCalendar(this.month + 11, this.year) : undefined}
      </div>
      ${this.showPrevMonthBtn ? html`
        <button class="calendarNavBtn prevMonth" @click="${this.handlePrevMonth}">
          ${this.generateIconHtml(chevronLeft)}
        </button>
      ` : undefined}
      ${this.showNextMonthBtn ? html`
        <button class="calendarNavBtn nextMonth" @click="${this.handleNextMonth}">
          ${this.generateIconHtml(chevronRight)}
        </button>
      ` : undefined}
      <div class="mobileHeader">
        <div class="headerDateFrom">
          <span class="mobileDateLabel"><slot name="mobileDateLabel"></slot></span>
          <slot name="mobileDateFromStr"></slot>
        </div>
        <div class="headerDateTo"><slot name="mobileDateToStr"></slot></div>
      </div>
      <div class="mobileFooter">
        <div class="mobileFooterActions">
          <auro-button fluid @click="${this.requestDismiss}">Done</auro-button>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('auro-calendar')) {
  customElements.define('auro-calendar', AuroCalendar);
}
