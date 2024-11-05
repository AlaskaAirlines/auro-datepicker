import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { format, getTime, startOfDay } from 'date-fns';
import { enUS } from 'date-fns/locale';

/* eslint-disable prefer-rest-params, no-void, no-magic-numbers, no-underscore-dangle, init-declarations, no-extra-parens, max-params */

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';
class RangeDatepickerCell extends LitElement {
  constructor() {
    super(...arguments);
    this.day = null;
    this.selected = false;
    this.hovered = false;
    this.dateTo = null;
    this.dateFrom = null;
    this.month = null;
    this.min = null;
    this.max = null;
    this.disabled = false;
    this.disabledDays = [];
    this.hoveredDate = null;
    this.isCurrentDate = false;
    this._locale = null;

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
    <button
      @click="${this.handleTap}"
      @mouseover="${this.handleHover}"
      @focus="${this.handleHover}"
      class="day ${this.isCurrentDate ? 'currentDate' : ''} ${this.isSelected(this.selected)} ${this.isHovered(this.hovered)} ${this.isEnabled(this.day, this.min, this.max, this.disabledDays)}"
      ?disabled="${this.disabled}"
      title="${this.getTitle((_a = this.day) === null || _a === void 0 ? void 0 : _a.date)}">
      <div class="currentDayMarker">${(_b = this.day) === null || _b === void 0 ? void 0 : _b.title}</div>
    </button>
  `;
  }

  updated(properties) {
    if (properties.has('dateFrom') ||
      properties.has('dateTo') ||
      properties.has('hoveredDate') ||
      properties.has('day')) {
      this.dateChanged(this.dateFrom, this.dateTo, this.hoveredDate, this.day);
    }
  }

  dateChanged(dateFrom, dateTo, hoveredDate, day) {
    this.selected = false;
    this.hovered = false;
    const parsedDateFrom = parseInt(dateFrom, 10);
    const parsedDateTo = parseInt(dateTo, 10);
    if (day) {
      if (getTime(startOfDay(parsedDateTo * 1000)) / 1000 === day.date ||
        getTime(startOfDay(parsedDateFrom * 1000)) / 1000 === day.date) {
        this.selected = true;
      }
      if (((hoveredDate === day.date || day.date < hoveredDate) &&
        day.date > parsedDateFrom &&
        !parsedDateTo &&
        !Number.isNaN(parsedDateFrom) &&
        parsedDateFrom !== undefined &&
        !this.selected) ||
        (day.date > parsedDateFrom && day.date < parsedDateTo)) {
        this.hovered = true;
      }
    }
  }

  handleTap() {
    let _a;
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('date-is-selected', {
        detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
      }));
    }
  }

  handleHover() {
    let _a;
    this.dispatchEvent(new CustomEvent('date-is-hovered', {
      detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
    }));
  }

  isSelected(selected) {
    return selected ? 'selected' : '';
  }

  isHovered(hovered) {
    return hovered ? 'hovered' : '';
  }

  isEnabled(day, min, max, disabledDays) {
    this.disabled = false;
    if (disabledDays && day && day.date) {
      if (day.date < min ||
        day.date > max ||
        disabledDays.findIndex((disabledDay) => parseInt(disabledDay, 10) === day.date) !== -1) {
        this.disabled = true;
        return 'disabled';
      }
    }
    return '';
  }

  getTitle(date) {
    if (date === undefined) {
      return '';
    }
    return format(date * 1000, 'PPPP', {
      locale: this.locale,
    });
  }
}
RangeDatepickerCell.styles = css`
  :host {
    display: block;
  }

  .day {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 38px;
    width: 38px;
    margin: 0;
    padding: 0;
    color: var(--wc-datepicker-cell-text);

    border: none;
    outline: none;
    background-color: transparent;
  }

  .day:focus {
    outline: 1px solid
    var(--wc-datepicker-cell-hovered, rgba(0, 150, 136, 0.5));
  }

  .day:not(.disabled):hover {
    background: var(--wc-datepicker-cell-hover, #e4e7e7);
    cursor: pointer;
  }

  .day.hovered {
    background: var(
    --wc-datepicker-cell-hovered,
    rgba(0, 150, 136, 0.5)
    ) !important;
    color: var(--wc-datepicker-cell-hovered-text, white);
  }

  .day.selected {
    background: var(
    --wc-datepicker-cell-selected,
    rgb(0, 150, 136)
    ) !important;
    color: var(--wc-datepicker-cell-selected-text, white);
  }

  .day.currentDate .currentDayMarker {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 80%;
    height: 80%;
    font-weight: var(--wc-current-day-font-weight, bold);
    border-radius: 50%;
    background-color: var(--wc-current-day-color);
    color: var(--wc-current-day-color-text);
  }

  .day.disabled {
    opacity: 0.4;
  }
  `;
__decorate([property({ type: Object })], RangeDatepickerCell.prototype, "day", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCell.prototype, "selected", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCell.prototype, "hovered", void 0);
__decorate([property({ type: String })], RangeDatepickerCell.prototype, "dateTo", void 0);
__decorate([property({ type: String })], RangeDatepickerCell.prototype, "dateFrom", void 0);
__decorate([property({ type: String })], RangeDatepickerCell.prototype, "month", void 0);
__decorate([property({ type: Number })], RangeDatepickerCell.prototype, "min", void 0);
__decorate([property({ type: Number })], RangeDatepickerCell.prototype, "max", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCell.prototype, "disabled", void 0);
__decorate([property({ type: Array })], RangeDatepickerCell.prototype, "disabledDays", void 0);
__decorate([property({ type: String })], RangeDatepickerCell.prototype, "hoveredDate", void 0);
__decorate([property({ type: Boolean })], RangeDatepickerCell.prototype, "isCurrentDate", void 0);
__decorate([property({ type: Object })], RangeDatepickerCell.prototype, "locale", null);
AuroLibraryRuntimeUtils.prototype.registerComponent('wc-range-datepicker-cell', RangeDatepickerCell);
