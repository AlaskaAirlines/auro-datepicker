// import { LionCalendar } from '@lion/calendar';
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

/* eslint-disable no-self-assign */

// class AuroCalendar extends LitElement {
export class AuroCalendar extends RangeDatepicker {
  constructor() {
    super();
  }

  static get styles() {
    return [
      // ...super.styles,
      styleCss
    ];
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

    this.notifyReady();
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
    var _a;
    if (!this.enableYearChange) {
        const calendar = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('auro-calendar-month[next]');
        calendar === null || calendar === void 0 ? void 0 : calendar.handlePrevMonth();
    }
  }
  handleNextMonth() {
    var _a;
    if (!this.enableYearChange) {
        const calendar = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('auro-calendar-month[prev]');
        calendar === null || calendar === void 0 ? void 0 : calendar.handleNextMonth();
    }
  }
  
  render() {
    return this.isNarrow(this.forceNarrow, this.narrow)
      ? this.renderNarrow()
      : this.renderNormal();
  }

  renderNormal() {
    return html `
      <div id="container">
        <auro-calendar-month
          id="firstDatePicker"
          .disabledDays="${this.disabledDays}"
          min="${this.min}"
          max="${this.max}"
          ?enableYearChange="${this.enableYearChange}"
          ?prev="${true}"
          ?noRange="${this.noRange}"
          .hoveredDate="${this.hoveredDate}"
          .dateTo="${this.dateTo}"
          .dateFrom="${this.dateFrom}"
          .locale="${this.locale}"
          month="${this.month}"
          year="${this.year}"
          @prev-month="${this.handlePrevMonth}"
          @hovered-date-changed="${this.hoveredDateChanged}"
          @date-from-changed="${this.dateFromChanged}"
          @date-to-changed="${this.dateToChanged}"
        >
        </auro-calendar-month>
        <auro-calendar-month
          .disabledDays="${this.disabledDays}"
          min="${this.min}"
          max="${this.max}"
          ?enableYearChange="${this.enableYearChange}"
          ?next="${true}"
          ?noRange="${this.noRange}"
          .hoveredDate="${this.hoveredDate}"
          .dateTo="${this.dateTo}"
          .dateFrom="${this.dateFrom}"
          .locale="${this.locale}"
          month="${this.monthPlus}"
          year="${this.yearPlus}"
          @next-month="${this.handleNextMonth}"
          @hovered-date-changed="${this.hoveredDateChanged}"
          @date-from-changed="${this.dateFromChanged}"
          @date-to-changed="${this.dateToChanged}"
        >
        </auro-calendar-month>
      </div>
    `;
  }

  renderNarrow() {
    return html `
      <auro-calendar-month
        .disabledDays="${this.disabledDays}"
        min="${this.min}"
        max="${this.max}"
        ?enableYearChange="${this.enableYearChange}"
        ?noRange="${this.noRange}"
        ?narrow="${this.isNarrow(this.forceNarrow, this.narrow)}"
        .hoveredDate="${this.hoveredDate}"
        .dateTo="${this.dateTo}"
        .dateFrom="${this.dateFrom}"
        .locale="${this.locale}"
        ?prev="${true}"
        ?next="${true}"
        month="${this.monthPlus}"
        year="${this.yearPlus}"
        @hovered-date-changed="${this.hoveredDateChanged}"
        @date-from-changed="${this.dateFromChanged}"
        @date-to-changed="${this.dateToChanged}"
      >
      </auro-calendar-month>
    `;
  }
}
