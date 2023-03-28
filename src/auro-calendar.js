import { html } from 'lit';
import styleCss from "./style-auro-calendar-css";

import './auro-calendar-month.js';
import { RangeDatepicker } from '../node_modules/wc-range-datepicker/dist/src/range-datepicker';

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
 * @fires auroCalendar-dateSelected - Notifies that a date has been selected in the calendar.
 * @fires auroCalendar-ready - Notifies that the component has finished initializing.
 */

/* eslint-disable no-self-assign, no-magic-numbers, no-undef-init, no-param-reassign */

// class AuroCalendar extends LitElement {
export class AuroCalendar extends RangeDatepicker {
  constructor() {
    super();

    this.numCalendars = 1;
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
   * @private
   * @returns {void} Marks the component as ready and sends event.
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroCalendar-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  firstUpdated() {
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
    if (changedProperties.has('month') || changedProperties.has('year')) {
      this.monthChanged(this.month, this.year);
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

  handlePrevMonth() {
    // Keeping this variable local allows for all calendar months displayed in range functionality to be manipulated
    const calendarMonthList = [...this.shadowRoot.querySelectorAll('auro-calendar-month')];

    for (let index = 0; index < calendarMonthList.length; index += 1) {
      calendarMonthList[index].handlePrevMonth();
    }
  }

  handleNextMonth() {
    // Keeping this variable local allows for all calendar months displayed in range functionality to be manipulated
    const calendarMonthList = [...this.shadowRoot.querySelectorAll('auro-calendar-month')];

    for (let index = 0; index < calendarMonthList.length; index += 1) {
      calendarMonthList[index].handleNextMonth();
    }
  }

  determineNumCalendars() {
    const vw = window.innerWidth;
    let calendarCount = 1;
    let maxCalendars = 1;

    if (!this.noRange) {
      maxCalendars = 2;
    }

    // This numerical value comes from the SCSS variable 'auro-breakpoint-sm' and needs to be changed to use the variable name
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
   * @private
   * @param {Number} month - Month the calendar displays.
   * @param {Number} year - Year the calendar displays.
   * @returns {Object} Returns single calendar month HTML.
   */
  renderCalendar(month, year) {
    // resets the month value back to corresponding calendar month
    if (month > 12) {
      month -= 12;
    }

    // adds a year to year value when month value resets back at 1
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
      <button class="calendarNavBtn prevMonth" @click="${this.handlePrevMonth}">
        <auro-icon category="interface" name="chevron-left" customColor></auro-icon>
      </button>
      <button class="calendarNavBtn nextMonth" @click="${this.handleNextMonth}">
        <auro-icon category="interface" name="chevron-right" customColor></auro-icon>
      </button>
      <div class="mobileHeader">
        <div class="headerActions">
          <button class="calendarNavBtn" @click="${this.requestDismiss}">
            <auro-icon category="interface" name="chevron-left" customColor></auro-icon>
          </button>
        </div>
        <div class="headerDateFrom">
          <span class="mobileDateLabel"><slot name="mobileDateLabel"></slot></span>
          <slot name="mobileDateFromStr"></slot>
        </div>
        <div class="headerDateTo"><slot name="mobileDateToStr"></slot></div>
      </div>
      <div class="mobileFooter"></div>
      <div class="mobileFooterActions">
        <auro-button @click="${this.requestDismiss}">Close</auro-button>
      </div>
    `;
  }
}


