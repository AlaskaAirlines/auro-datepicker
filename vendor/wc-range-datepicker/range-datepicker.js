import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { getMonth, getYear } from 'date-fns';
import './range-datepicker-calendar.js';

/* eslint-disable no-underscore-dangle, no-magic-numbers, no-underscore-dangle, no-void, init-declarations, no-extra-parens, no-unused-expressions */

export class RangeDatepicker extends LitElement {
  constructor() {
    super();

    /**
     * Array of disabled days. Format is Unix timestamp.
     */
    this.disabledDays = [];

    /**
     * Display a select year control.
     */
    this.enableYearChange = false;

    /**
     * Force display of only one month.
     */
    this.forceNarrow = false;

    /**
     * Set locale of the calendar.
     */
    this.locale = null;

    /**
     * Max date. Format is Unix timestamp.
     */
    this.max = '8640000000000';

    /**
     * Minimal date. Format is Unix timestamp.
     */
    this.min = '-8640000000000';

    /**
     * If true only one date can be selected.
     */
    this.noRange = false;
    this.dateFrom = null;
    this.dateTo = null;
    this.hoveredDate = null;
    this.monthPlus = null;
    this.yearPlus = null;
    this.narrow = false;
    const now = new Date();
    this.month = getMonth(now) + 1;
    this.year = getYear(now);
    this.monthChanged(this.month, this.year);
  }

  render() {
    return this.isNarrow(this.forceNarrow, this.narrow)
      ? this.renderNarrow()
      : this.renderNormal();
  }

  renderNormal() {
    return html`
    <div id="container">
    <wc-range-datepicker-calendar
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
    </wc-range-datepicker-calendar>
    <wc-range-datepicker-calendar
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
    </wc-range-datepicker-calendar>
    </div>
  `;
  }

  renderNarrow() {
    return html`
    <wc-range-datepicker-calendar
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
    </wc-range-datepicker-calendar>
  `;
  }

  firstUpdated() {
    const mql = window.matchMedia('(max-width: 650px)');
    mql.addListener((mqlEvent) => this.queryMatchesChanged(mqlEvent));
    this.queryMatchesChanged(mql);
  }

  updated(properties) {
    if (properties.has('month') || properties.has('year')) {
      this.monthChanged(this.month, this.year);
    }
    if (properties.has('noRange')) {
      this.noRangeChanged(this.noRange, properties.get('noRange'));
    }
    if (properties.has('narrow')) {
      this.dispatchEvent(new CustomEvent('narrow-changed', { detail: { value: this.narrow } }));
    }
    if (properties.has('locale')) {
      this.localeChanged();
    }
  }

  isNarrow(forceNarrow, narrow) {
    return forceNarrow || narrow;
  }

  queryMatchesChanged(mql) {
    this.narrow = mql.matches;
    this.requestUpdate();
  }

  handlePrevMonth() {
    let _a;
    if (!this.enableYearChange) {
      const calendar = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('wc-range-datepicker-calendar[next]');
      calendar === null || calendar === void 0 ? void 0 : calendar.handlePrevMonth();
    }
  }

  handleNextMonth() {
    let _a;
    if (!this.enableYearChange) {
      const calendar = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('wc-range-datepicker-calendar[prev]');
      calendar === null || calendar === void 0 ? void 0 : calendar.handleNextMonth();
    }
  }

  hoveredDateChanged(event) {
    this.hoveredDate = event.detail.value;
  }

  monthChanged(month, year) {
    if (year && month) {
      this.monthPlus = (month % 12) + 1;
      if (this.monthPlus === 1) {
        this.yearPlus = year + 1;
      } else {
        this.yearPlus = year;
      }
    }
  }

  noRangeChanged(isNoRange, wasNoRange) {
    if (!wasNoRange && isNoRange) {
      this.dateTo = null;
      this.hoveredDate = null;
    }
  }

  localeChanged() {
    if (!this.month) {
      this.month = getMonth(new Date());
    }
    if (!this.year) {
      this.year = getYear(new Date());
    }
  }

  dateToChanged(event) {
    this.dateTo = event.detail.value;
    this.dispatchEvent(new CustomEvent('date-to-changed', { detail: { value: event.detail.value } }));
  }

  dateFromChanged(event) {
    this.dateFrom = event.detail.value;
    this.dispatchEvent(new CustomEvent('date-from-changed', {
      detail: { value: event.detail.value },
    }));
  }
}
RangeDatepicker.styles = css`
  :host {
    display: block;
    position: relative;
  }

  #container {
    display: flex;
    flex-direction: row;
  }

  #firstDatePicker {
    margin-right: 16px;
  }
  `;
__decorate([property({ type: Array })], RangeDatepicker.prototype, "disabledDays", void 0);
__decorate([property({ type: Boolean })], RangeDatepicker.prototype, "enableYearChange", void 0);
__decorate([property({ type: Boolean })], RangeDatepicker.prototype, "forceNarrow", void 0);
__decorate([property({ type: Object })], RangeDatepicker.prototype, "locale", void 0);
__decorate([property({ type: String })], RangeDatepicker.prototype, "max", void 0);
__decorate([property({ type: String })], RangeDatepicker.prototype, "min", void 0);
__decorate([property({ type: Number })], RangeDatepicker.prototype, "month", void 0);
__decorate([property({ type: Boolean })], RangeDatepicker.prototype, "noRange", void 0);
__decorate([property({ type: Number })], RangeDatepicker.prototype, "year", void 0);
__decorate([property({ type: String })], RangeDatepicker.prototype, "dateFrom", void 0);
__decorate([property({ type: String })], RangeDatepicker.prototype, "dateTo", void 0);
__decorate([property({ type: String })], RangeDatepicker.prototype, "hoveredDate", void 0);
__decorate([property({ type: Number })], RangeDatepicker.prototype, "monthPlus", void 0);
__decorate([property({ type: Number })], RangeDatepicker.prototype, "yearPlus", void 0);
__decorate([property({ type: Boolean })], RangeDatepicker.prototype, "narrow", void 0);
