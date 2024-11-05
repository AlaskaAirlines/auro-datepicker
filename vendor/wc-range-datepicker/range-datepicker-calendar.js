import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { addDays, addMonths, addYears, endOfMonth, format, getDay, parse, startOfDay, subMonths, subYears, } from 'date-fns';
import { enUS } from 'date-fns/locale';
import './range-datepicker-cell.js';
import { Day } from './day.js';

/* eslint-disable max-lines, no-void, no-magic-numbers, no-underscore-dangle, init-declarations, no-extra-parens, prefer-destructuring, no-unused-expressions */

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';
export class RangeDatepickerCalendar extends LitElement {
  constructor() {
    super();

    /**
     * Date from. Format is Unix timestamp.
     */
    this.dateFrom = null;

    /**
     * Date to. Format is Unix timestamp.
     */
    this.dateTo = null;
    this.hoveredDate = null;
    this.enableYearChange = false;
    this.month = '01';
    this.narrow = false;
    this.noRange = false;
    this.next = false;
    this.prev = false;
    this.year = 2020;
    this.disabledDays = [];

    /**
     * Max date. Format is Unix timestamp.
     */
    this.max = null;

    /**
     * Minimal date. Format is Unix timestamp.
     */
    this.min = null;
    this.yearsList = [];
    this.monthsList = [];
    this.dayNamesOfTheWeek = [];
    this.daysOfMonth = [];
    this._locale = null;
    this.currentDate = parseInt(format(startOfDay(Date.now()), 't'), 10);
    this.localeChanged();
    this.yearAndMonthChanged(this.year, this.month);
  }

  get locale() {
    return this._locale ? this._locale : enUS;
  }

  set locale(value) {
    const oldValue = this._locale;
    this._locale = value;
    this.requestUpdate('locale', oldValue);
  }

  render() {
    let _a, _b;
    return html`
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
            ${(_a = this.dayNamesOfTheWeek) === null || _a === void 0 ? void 0 : _a.map((dayNameOfWeek) => this.renderDayOfWeek(dayNameOfWeek))}
          </div>
        </div>
        <div class="tbody">
          ${(_b = this.daysOfMonth) === null || _b === void 0 ? void 0 : _b.map((week) => this.renderWeek(week))}
        </div>
      </div>
    </div>
    `;
  }

  renderPrevButton() {
    if (this.prev || this.narrow || this.enableYearChange) {
      return html`
        <button
          icon="chevron_left"
          @click="${this.handlePrevMonth}">
        </button>
      `;
    }
    return null;
  }

  renderNextButton() {
    if (this.next || this.narrow || this.enableYearChange) {
      return html`
        <button
          icon="chevron_right"
          @click="${this.handleNextMonth}">
        </button>`;
    }

    return null;
  }

  renderYear() {
    return html`${this.year}`;
  }

  renderDayOfWeek(dayOfWeek) {
    return html`<div class="th">${dayOfWeek}</div>`;
  }

  renderWeek(week) {
    return html`
      <div class="tr">${week.map((day) => this.renderDay(day))}</div>
    `;
  }

  renderDay(day) {
    return html`
    <div class="td ${this.tdIsEnabled(day)}">
      ${day ? html`
        <wc-range-datepicker-cell
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
          @date-is-hovered="${this.handleDateHovered}">
        </wc-range-datepicker-cell>
      ` : null}
    </div>
    `;
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

  updated(properties) {
    if (properties.has('locale')) {
      this.localeChanged();
    }
    if (properties.has('year')) {
      this.dispatchEvent(new CustomEvent('year-changed', { detail: { value: this.year } }));
    }
    if (properties.has('year') || properties.has('month')) {
      this.yearAndMonthChanged(this.year, this.month);
    }
  }

  isCurrentDate(day) {
    const dayDate = day.date;
    return dayDate === this.currentDate;
  }

  localeChanged() {
    const dayNamesOfTheWeek = [];
    for (let index = 0; index < 7; index += 1) {
      dayNamesOfTheWeek.push(this.locale.localize.day(index, { width: 'short' }));
    }
    const firstDayOfWeek = this.locale.options.weekStartsOn
      ? this.locale.options.weekStartsOn
      : 0;
    const tmp = dayNamesOfTheWeek.slice().splice(0, firstDayOfWeek);
    const newDayNamesOfTheWeek = dayNamesOfTheWeek
      .slice() // eslint-disable-line dot-location
      .splice(firstDayOfWeek, dayNamesOfTheWeek.length) // eslint-disable-line dot-location
      .concat(tmp); // eslint-disable-line dot-location
    this.dayNamesOfTheWeek = newDayNamesOfTheWeek;
  }

  yearAndMonthChanged(year, month) {
    if (year && month) {
      let monthMinus = `${month}`;
      monthMinus = monthMinus.substring(monthMinus.length - 2);
      let startDateString = `01/${monthMinus}/${year}`;
      let startDateFn = parse(startDateString, 'dd/MM/yyyy', new Date());
      const endDateFn = endOfMonth(startDateFn);
      const endDateString = format(endDateFn, 'dd/MM/yyyy');
      const firstDayOfWeek = this.locale.options.weekStartsOn
        ? this.locale.options.weekStartsOn
        : 0;
      const rows = [];
      let columns = [];
      const lastDayOfWeek = 6;
      while (startDateString !== endDateString) {
        let dayNumberFn = getDay(startDateFn) - firstDayOfWeek;
        if (dayNumberFn < 0) {
          dayNumberFn = 6;
        }
        const columnFn = new Day(startDateFn);
        columns.push(columnFn);
        if (dayNumberFn === lastDayOfWeek) {
          for (let index = columns.length; index < lastDayOfWeek + 1; index += 1) {
            columns.unshift(null);
          }
          rows.push(columns.slice());
          columns = [];
        }
        startDateFn = addDays(startDateFn, 1);
        startDateString = format(startDateFn, 'dd/MM/yyyy');
        if (startDateString === endDateString) {
          const endColumnFn = new Day(startDateFn);
          columns.push(endColumnFn);
          for (let index = columns.length; index <= lastDayOfWeek; index += 1) {
            columns.push(null);
          }
          rows.push(columns.slice());
          columns = [];
        }
      }
      this.daysOfMonth = rows;
    }
  }

  computeCurrentMonthName(month, year) {
    return format(new Date(year, parseInt(month, 10) - 1), 'MMMM', {
      locale: this.locale,
    });
  }

  tdIsEnabled(day) {
    return day ? 'enabled' : '';
  }

  handleDateSelected(event) {
    const { detail } = event;
    const { date } = detail;
    if (!this.noRange) {
      if (this.dateFrom && this.dateTo) {
        this.dateFrom = date;
        this.dateTo = null;
        this.hoveredDate = null;
      } else if (!this.dateFrom || (this.dateFrom && date < this.dateFrom)) {
        this.dateFrom = date;
      } else if (!this.dateTo || (this.dateTo && date > this.dateTo)) {
        this.dateTo = date;
      }
    } else {
      this.dateFrom = date;
    }

    this.dispatchEvent(new CustomEvent('date-from-changed', { detail: { value: this.dateFrom } }));
    this.dispatchEvent(new CustomEvent('date-to-changed', { detail: { value: this.dateTo } }));
  }

  handleOpenYearSelection() {
    let _a;
    const menu = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.year-change');
    const index = menu.items.findIndex((item) => item.value === this.year.toString());
    menu.select(index);
    menu.show();
  }

  handleYearSelected() {
    let _a;
    const menu = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.year-change');
    const selected = menu.selected;
    this.year = parseInt(selected === null || selected === void 0 ? void 0 : selected.value, 10);
  }

  handleDateHovered(event) {
    this.hoveredDate = event.detail.date;
    this.dispatchEvent(new CustomEvent('hovered-date-changed', {
      detail: { value: this.hoveredDate },
    }));
  }

  handleNextMonth() {
    let _a, _b;
    const tbody = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tbody');
    const monthName = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.header > div');
    tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('withTransition');
    tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('moveToLeft');
    monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('withTransition');
    monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('moveToLeft');
    const month = parse(this.month, 'MM', new Date());
    const monthPlusDate = addMonths(month, 1);
    const monthPlusString = format(monthPlusDate, 'MM', {
      locale: this.locale,
    });
    this.month = monthPlusString;
    if (this.month === '01') {
      const year = parse(this.year.toString(), 'yyyy', new Date());
      const yearPlusDate = addYears(year, 1);
      const yearPlusString = format(yearPlusDate, 'yyyy', {
        locale: this.locale,
      });
      this.year = parseInt(yearPlusString, 10);
    }
    this.dispatchEvent(new CustomEvent('next-month'));
    setTimeout(() => {
      tbody === null || tbody === void 0 ? void 0 : tbody.classList.remove('withTransition');
      tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('moveToRight');
      tbody === null || tbody === void 0 ? void 0 : tbody.classList.remove('moveToLeft');
      monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('withTransition');
      monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('moveToRight');
      monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('moveToLeft');
      setTimeout(() => {
        tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('withTransition');
        tbody === null || tbody === void 0 ? void 0 : tbody.classList.remove('moveToRight');
        monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('withTransition');
        monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('moveToRight');
        setTimeout(() => {
          tbody === null || tbody === void 0 ? void 0 : tbody.classList.remove('withTransition');
          monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('withTransition');
        }, 100);
      }, 100);
    }, 100);
  }

  handlePrevMonth() {
    let _a, _b;
    const tbody = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tbody');
    const monthName = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.header > div');
    tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('withTransition');
    tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('moveToRight');
    monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('withTransition');
    monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('moveToRight');
    const month = parse(this.month, 'MM', new Date());
    const monthMinusDate = subMonths(month, 1);
    const monthMinusString = format(monthMinusDate, 'MM', {
      locale: this.locale,
    });
    this.month = monthMinusString;
    if (this.month === '12') {
      const year = parse(this.year.toString(), 'yyyy', new Date());
      const yearMinusDate = subYears(year, 1);
      const yearMinusString = format(yearMinusDate, 'yyyy', {
        locale: this.locale,
      });
      this.year = parseInt(yearMinusString, 10);
    }
    this.dispatchEvent(new CustomEvent('prev-month'));
    setTimeout(() => {
      tbody === null || tbody === void 0 ? void 0 : tbody.classList.remove('withTransition');
      tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('moveToLeft');
      tbody === null || tbody === void 0 ? void 0 : tbody.classList.remove('moveToRight');
      monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('withTransition');
      monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('moveToLeft');
      monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('moveToRight');
      setTimeout(() => {
        tbody === null || tbody === void 0 ? void 0 : tbody.classList.add('withTransition');
        tbody === null || tbody === void 0 ? void 0 : tbody.classList.remove('moveToLeft');
        monthName === null || monthName === void 0 ? void 0 : monthName.classList.add('withTransition');
        monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('moveToLeft');
        setTimeout(() => {
          monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('withTransition');
          monthName === null || monthName === void 0 ? void 0 : monthName.classList.remove('withTransition');
        }, 100);
      }, 100);
    }, 100);
  }

  setYears(from, to) {
    const yearsList = [];
    for (let index = from; index <= to; index += 1) {
      yearsList.push(index);
    }
    this.yearsList = yearsList;
  }
}

RangeDatepickerCalendar.styles = css`
  :host {
    display: block;
    width: 266px;
  }

  :host > div {
    overflow: hidden;
  }

  div.table {
    display: table;
    border-collapse: collapse;
    table-layout: fixed;
  }

  div.th {
    display: table-cell;
    color: var(--range-datepicker-day-names-text, rgb(117, 117, 117));
    font-size: 11px;
    width: 38px;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  div.tr {
    display: table-row;
    height: 38px;
  }

  div.td {
    display: table-cell;
    padding: 0;
    width: 38px;
    margin: 0;
    height: 38px;
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 266px;
    margin: 10px 0;
    text-align: center;
    color: var(--range-datepicker-month-text);
  }

  .headerTitle {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .header mwc-icon-button {
    padding: 0;
    --mdc-icon-size: 30px;
  }

  .header::first-letter {
    text-transform: uppercase;
  }

  .header > div > div {
    margin-right: 8px;
  }

  div.tbody {
    transition: all 0ms;
    transform: translateX(0);
    height: 235px;
  }

  .withTransition {
    transition: all 100ms;
  }

  .moveToLeft {
    transform: translateX(-274px);
  }

  .moveToRight {
    transform: translateX(274px);
  }

  .withTransition td,
  .moveToLeft td,
  .moveToRight td {
    border: none;
  }

  .year-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .year-change {
    max-height: 200px;
  }
  `;
__decorate([property({ type: String })], RangeDatepickerCalendar.prototype, "dateFrom", void 0);
__decorate([property({ type: String })], RangeDatepickerCalendar.prototype, "dateTo", void 0);
__decorate([property({ type: String })], RangeDatepickerCalendar.prototype, "hoveredDate", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCalendar.prototype, "enableYearChange", void 0);
__decorate([property({ type: String })], RangeDatepickerCalendar.prototype, "month", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCalendar.prototype, "narrow", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCalendar.prototype, "noRange", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCalendar.prototype, "next", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCalendar.prototype, "prev", void 0);
__decorate([property({ type: String })], RangeDatepickerCalendar.prototype, "year", void 0);
__decorate([property({ type: Array })], RangeDatepickerCalendar.prototype, "disabledDays", void 0);
__decorate([property({ type: Object })], RangeDatepickerCalendar.prototype, "locale", null);
__decorate([property({ type: String })], RangeDatepickerCalendar.prototype, "max", void 0);
__decorate([property({ type: String })], RangeDatepickerCalendar.prototype, "min", void 0);
__decorate([property({ type: Array })], RangeDatepickerCalendar.prototype, "yearsList", void 0);
__decorate([property({ type: Array })], RangeDatepickerCalendar.prototype, "monthsList", void 0);
__decorate([property({ type: Array })], RangeDatepickerCalendar.prototype, "dayNamesOfTheWeek", void 0);
__decorate([property({ type: Array })], RangeDatepickerCalendar.prototype, "daysOfMonth", void 0);
AuroLibraryRuntimeUtils.prototype.registerComponent('wc-range-datepicker-calendar', RangeDatepickerCalendar);
