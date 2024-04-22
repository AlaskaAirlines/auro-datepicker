// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines, max-depth, no-magic-numbers, complexity, no-undef-init, require-unicode-regexp, newline-per-chained-call, no-underscore-dangle, lit/binding-positions,
   lit/no-invalid-html, no-unused-expressions */

// If using litElement base class
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';
import { AuroDatepickerUtilities } from './utilities';

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import styleCss from "./style-css.js";
import './auro-calendar.js';

import { AuroDropdown } from '@aurodesignsystem/auro-dropdown/src/auro-dropdown.js';
import dropdownVersion from './dropdownVersion';

import { AuroInput } from '@aurodesignsystem/auro-input/src/auro-input.js';
import inputVersion from './inputVersion';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {String} value - Value selected for the date picker.
 * @prop {String} valueEnd - Value selected for the second date picker when using date range.
 * @attr {String} error - When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value.
 * @attr {String} validity - Specifies the `validityState` this element is in.
 * @attr {String} setCustomValidity - Sets a custom help text message to display for all validityStates.
 * @attr {String} setCustomValidityRangeUnderflow - Custom help text message to display when validity = `rangeUnderflow`.
 * @attr {String} setCustomValidityRangeOverflow - Custom help text message to display when validity = `rangeOverflow`.
 * @attr {String} setCustomValidityValueMissing - Help text message to display when validity = `valueMissing`.
 * @attr {String} calendarStartDate - The first date that may be displayed in the calendar.
 * @attr {String} calendarEndDate - The last date that may be displayed in the calendar
 * @attr {String} calendarFocusDate - The date that may be visually rendered to the user in the calendar.
 * @attr {Boolean} disabled - If set, disables the datepicker.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @attr {Boolean} range - If set, turns on date range functionality in auro-calendar.
 * @attr {String} centralDate - The date that determines the currently visible month.
 * @attr {String} maxDate - Maximum date. All dates after will be disabled.
 * @attr {String} minDate - Minimum date. All dates before will be disabled.
 * @attr {Array} monthNames = Names of all 12 months to render in the calendar, used for localization of date string in mobile layout.
 * @slot helpText - Defines the content of the helpText.
 * @slot mobileDateLabel - Defines the content to display above selected dates in the mobile layout.
 * @slot toLabel - Defines the label content for the second input when the `range` attribute is used.
 * @slot fromLabel - Defines the label content for the first input.
 * @slot date_MM_DD_YYYY - Defines the content to display in the auro-calendar-cell for the specified date.
 * @slot popover_MM_DD_YYYY - Defines the content to display in the auro-calendar-cell popover for the specified date.
 * @csspart dropdown - Use for customizing the style of the dropdown.
 * @csspart trigger - Use for customizing the style of the datepicker trigger.
 * @csspart input - Use for customizing the style of the datepicker inputs.
 * @csspart calendarWrapper - Use for customizing the style of the calendar container.
 * @csspart calendar - Use for customizing the style of the calendar.
 * @csspart helpTextSpan - Use for customizing the style of the datepicker help text span.
 * @csspart helpText - Use for customizing the style of the datepicker help text.
 * @event auroDatePicker-ready - Notifies that the component has finished initializing.
 * @event auroDatePicker-validated - Notifies that the component value(s) have been validated.
 * @event auroDatePicker-valueSet - Notifies that the component has a new value set.
 * @event auroDatePicker-toggled - Notifies that the calendar dropdown has been opened/closed.
 * @event auroDatePicker-monthChanged - Notifies that the visible calendar month(s) have changed.
 */

// build the component class
export class AuroDatePicker extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.util = new AuroDatepickerUtilities();

    this.disabled = false;
    this.required = false;
    this.range = false;
    this.noValidate = false;
    this.validity = undefined;
    this.value = undefined;
    this.valueEnd = undefined;
    this.calendarStartDate = undefined;
    this.calendarEndDate = undefined;
    this.calendarFocusDate = this.value;
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    /**
     * @private
     */
    this.centralDate = new Date();

    /**
     * @private
     */
    this.type = "month-day-year";

    /**
     * @private
     */
    this.dateSlotContent = [];

    /**
     * Generate unique names for dependency components.
     */
    const versioning = new AuroDependencyVersioning();
    this.dropdownTag = versioning.generateTag('auro-dropdown', dropdownVersion, AuroDropdown);
    this.inputTag = versioning.generateTag('auro-input', inputVersion, AuroInput);
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      error: {
        type: String,
        reflect: true
      },
      noValidate: {
        type: Boolean
      },
      setCustomValidity: {
        type: String,
        reflect: true
      },
      setCustomValidityRangeUnderflow: {
        type: String,
        reflect: true
      },
      setCustomValidityRangeOverflow: {
        type: String,
        reflect: true
      },
      setCustomValidityValueMissing: {
        type: String,
        reflect: true
      },
      validity: {
        type: String,
        reflect: true
      },
      range: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      required: {
        type: Boolean,
        reflect: true
      },
      type: {
        type: String,
        reflect: true
      },
      value: {
        type: String,
        reflect: true
      },
      valueEnd: {
        type: String,
        reflect: true
      },
      centralDate: {
        type: String
      },
      maxDate: {
        type: String,
        reflect: true
      },
      minDate: {
        type: String,
        reflect: true
      },
      monthNames: {
        type: Array
      },
      calendarStartDate: {
        type: String,
        reflect: true
      },
      calendarEndDate: {
        type: String,
        reflect: true
      },
      calendarFocusDate: {
        type: String,
        reflect: true
      },

      /**
       * @private
       */
      dropdownElementName: { type: String },

      /**
       * @private
       */
      dropdownTag: { type: Object },

      /**
       * @private
       */
      inputElementName: { type: String },

      /**
       * @private
       */
      inputTag: { type: Object }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * Force the calendar view to the focus date when it changes.
   * @private
   * @returns {void}
   */
  handleFocusDateChange() {
    if (this.calendarFocusDate) {
      this.centralDate = this.calendarFocusDate;
    }
  }

  /**
   * @private
   * @param {Number} length - Number of characters for the returned random string.
   * @returns {string}
   */
  generateRandomString(length) {
    const result = Math.random().toString(36).substring(2, length + 2); // eslint-disable-line newline-per-chained-call
    return result;
  }

  /**
   * Focuses the datepicker trigger input.
   * @param {String} focusInput - Pass in `endDate` to focus on the return input. No parameter is needed to focus on the depart input.
   * @returns {void}
   */
  focus(focusInput) {
    this.range && focusInput === 'endDate' ? this.inputList[1].focus() : this.inputList[0].focus();
  }

  /**
   * Determines the validity state of the element.
   * @private
   * @returns {void}
   */
  validate() {
    const shouldValidate = !this.contains(document.activeElement) && !this.noValidate;

    if (shouldValidate) {
      this.validity = this.inputList[0].validity;

      // If the first input is valid, set validity to equal the second input.
      if (this.validity === 'valid' && this.inputList[1] && this.inputList[1].validity !== undefined && this.inputList[1].validity !== 'valid') {
        this.validity = this.inputList[1].validity;
      }
    }

    // pass correct error state to dropdown based on validity state
    if (this.validity) {
      if (this.validity !== 'valid') {
        this.dropdown.setAttribute('error', '');
      } else {
        this.dropdown.removeAttribute('error');
      }
    } else {
      this.dropdown.removeAttribute('error');
    }

    // notify listener that validation logic was executed
    if (shouldValidate) {
      this.dispatchEvent(new CustomEvent('auroDatePicker-validated', {
        bubbles: true,
        composed: true,
        detail: {
          validity: this.validity
        }
      }));
    }
  }

  /**
   * Converts valid time number to format used by wc-date-range API.
   * @private
   * @param {Date} date - Date to be converted.
   * @returns {Number} Simplified number.
   */
  convertToWcValidTime(date) {
    return new Date(date).getTime() / 1000;
  }

  /**
   * Converts date object into a string.
   * @private
   * @param {String} time - Unix timestamp to be converted to a date object.
   * @returns {Date} Date formatted as a string.
   */
  convertWcTimeToDate(time) {
    return new Date(time * 1000).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  /**
   * Sends event notifying that the input has changed it's value.
   * @private
   * @returns {void}
   */
  notifyValueChanged() {
    let inputEvent = null;

    inputEvent = new Event('auroDatePicker-valueSet', {
      bubbles: true,
      composed: true,
    });

    // Dispatched event to alert outside shadow DOM context of event firing.
    this.dispatchEvent(inputEvent);
  }

  /**
   * Generates a date string used in the mobile calendar layout.
   * @private
   * @param {string} date - Date to parse into longer mobile version.
   * @returns {string}
   */
  getMobileDateStr(date) {
    let dateStr = '';
    const dateObj = new Date(date);

    if (date && this.validDateStr(date)) {
      dateStr += this.monthNames[dateObj.getMonth()].substring(0, 3);
      dateStr += ' ';
      dateStr += dateObj.getDate();
      dateStr += ', ';
      dateStr += dateObj.getFullYear();
      dateStr += ' (';
      // Need TODO: need to  make locale not be hardcoded - https://phrase.com/blog/posts/detecting-a-users-locale/
      dateStr += dateObj.toLocaleDateString('en-US', { weekday: 'short' });
      dateStr += ')';
    }

    return dateStr;
  }

  /**
   * Returns true if value passed in is a valid date.
   * @private
   * @param {String} date - Date to validate.
   * @returns {Boolean}
   */
  validDateStr(date) {
    if (date.length === 10 && Date.parse(date)) {
      return true;
    }

    return false;
  }

  /**
   * Return appropriate error message.
   * @param {Object} evt - Event passed in from auro-input when the event triggered this function.
   * @private
   */
  getErrorMessage(evt) {
    if (evt) {
      const inputClass = evt.target.getAttribute('class');
      if (inputClass === 'dateFrom') {
        if (this.inputList[0].validity && this.inputList[0].validity !== 'valid') {
          this.errorMessage = evt.target.errorMessage;
        } else {
          this.errorMessage = undefined;
        }
      }

      if (inputClass === 'dateTo') {
        if (!this.errorMessage && this.inputList[1].validity && this.inputList[1].validity !== 'valid') {
          this.errorMessage = evt.target.errorMessage;
        }
      }
    }
  }

  /**
   * Changes the calendar's visibility to reflect the value of the central date attribute.
   * @private
   * @returns {void}
   */
  handleCentralDateChange() {
    this.calendar.setAttribute('centralDate', this.centralDate);
  }

  /**
   * Sends event notifying that the calendar popover has been opened.
   * @private
   * @returns {void}
   */
  notifyDatepickerToggled() {
    this.dispatchEvent(new CustomEvent('auroDatePicker-toggled', {
      bubbles: true,
      composed: true,
      detail: {
        expanded: this.dropdown.isPopoverVisible,
      },
    }));
  }

  /**
   * Sends event notifying that the calendar's visible month has changed.
   * @param {Object} event - Event passed in from auro-calendar when the event triggered this function.
   * @private
   * @returns {void}
   */
  notifyMonthChanged(event) {
    this.dispatchEvent(new CustomEvent('auroDatePicker-monthChanged', {
      bubbles: true,
      composed: true,
      detail: {
        month: event.detail.month,
        year: event.detail.year,
        numCalendars: event.detail.numCalendars,
      },
    }));
  }

  /**
   * Binds all behavior needed to the dropdown after rendering.
   * @private
   * @returns {void}
   */
  configureDropdown() {
    this.dropdown = this.shadowRoot.querySelector(this.dropdownTag._$litStatic$);

    this.dropdown.addEventListener('auroDropdown-triggerClick', () => {
      if (!this.isPopoverVisible) {
        this.dropdown.show();
      }
    });

    this.dropdown.addEventListener('auroDropdown-toggled', () => {
      this.setAttribute('aria-expanded', this.dropdown.isPopoverVisible);
      this.notifyDatepickerToggled();
    });

    if (!this.dropdown.hasAttribute('aria-expanded')) {
      this.dropdown.setAttribute('aria-expanded', this.dropdown.isPopoverVisible);
    }
  }

  /**
   * Binds all behavior needed to the input after rendering.
   * @private
   * @returns {void}
   */
  configureInput() {
    this.triggerInput = this.dropdown.querySelector('[slot="trigger"');

    this.inputList = [...this.dropdown.querySelectorAll(this.inputTag._$litStatic$)];

    this.handleReadOnly();

    // auto-show bib when manually editing the input value
    for (let index = 0; index < this.inputList.length; index += 1) {
      const input = this.inputList[index];

      input.addEventListener('keyup', (evt) => {
        if (evt.key.length === 1 || evt.key === 'Delete' || evt.key === 'Backspace') {
          this.dropdown.show();
        }
      });
    }

    this.inputList[0].addEventListener('input', () => {
      this.value = this.inputList[0].value;
      this.notifyValueChanged();
    });

    this.inputList[0].addEventListener('auroInput-validated', () => {
      this.validate();
    });

    this.inputList[0].addEventListener('auroInput-helpText', (evt) => {
      this.getErrorMessage(evt);
    });

    if (this.inputList.length > 1) {
      this.inputList[1].addEventListener('input', () => {
        this.valueEnd = this.inputList[1].value;
        this.notifyValueChanged();
      });

      this.inputList[1].addEventListener('auroInput-validated', () => {
        this.validate();
      });

      this.inputList[1].addEventListener('auroInput-helpText', (evt) => {
        this.getErrorMessage(evt);
      });
    }
  }

  /**
   * Binds all behavior needed to the dropdown after rendering.
   * @private
   * @returns {void}
   */
  configureCalendar() {
    this.calendar = this.shadowRoot.querySelector('auro-calendar');

    this.calendar.addEventListener('auroCalendar-dateSelected', () => {
      if (this.inputList[0].value !== this.calendar.dateFrom && this.calendar.dateFrom !== undefined) {
        this.inputList[0].value = this.convertWcTimeToDate(this.calendar.dateFrom);
      }

      if (this.inputList[1] && this.calendar.dateTo && this.inputList[1].value !== this.calendar.dateTo) {
        this.inputList[1].value = this.convertWcTimeToDate(this.calendar.dateTo);
      }
    });

    this.calendar.addEventListener('auroCalendar-dismissRequest', () => {
      this.dropdown.hide();
    });

    this.calendar.addEventListener('auroCalendar-monthChanged', (event) => {
      this.notifyMonthChanged(event);
    });
  }

  /**
   * Binds all behavior needed to the datepicker after rendering.
   * @private
   * @returns {void}
   */
  configureDatepicker() {
    this.addEventListener('focusin', () => {

      /**
       * The datepicker is considered to be in it's initial state based on
       * if this.value === undefined. The first time we interact with the
       * datepicker manually, by applying focusin, we need to flag the
       * datepicker as no longer in the initial state.
       */
      if (this.value === undefined) {
        this.value = '';
      }

      if (this.valueEnd === undefined) {
        this.valueEnd = '';
      }
    });

    this.addEventListener('focusout', (evt) => {
      this.setAttribute('aria-expanded', this.dropdown.isPopoverVisible);

      if (!this.noValidate && !evt.detail.expanded && this.inputList[0].value !== undefined) {
        if (!this.contains(document.activeElement)) {
          this.inputList[0].validate();

          if (this.inputList[1] && this.inputList[1].value !== undefined) {
            this.inputList[1].validate();
          }
        }
      }
    });

    // Close the datepicker when clicking outside it
    document.addEventListener('click', (evt) => {
      if (!evt.composedPath().includes(this) && this.dropdown.isPopoverVisible) {
        this.dropdown.hide();
      }
    });

    document.activeElement.addEventListener('focusin', () => {
      if (document.activeElement !== document.querySelector('body') && !this.contains(document.activeElement)) {
        this.dropdown.hide();
      }
    });

    if (this.hasAttribute('value') && this.getAttribute('value').length > 0) {
      this.calendar.dateFrom = new Date(this.value).getTime();
    }

    if (this.hasAttribute('valueEnd') && this.getAttribute('valueEnd').length > 0) {
      this.calendar.dateTo = new Date(this.valueEnd).getTime();
    }
  }

  /**
   * Marks the component as ready and sends event.
   * @private
   * @returns {void}
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroDatePicker-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   * Sets the readonly attribute on the inputs based on the window width.
   * @private
   * @returns {void}
   */
  handleReadOnly() {
    // --ds-grid-breakpoint-sm
    const mobileBreakpoint = 576;

    for (let index = 0; index < this.inputList.length; index += 1) {
      if (window.innerWidth < mobileBreakpoint) {
        this.inputList[index].setAttribute('readonly', true);
      } else {
        this.inputList[index].removeAttribute('readonly');
      }
    }
  }

  /**
   * Keep the datepicker in sync with the calendar's central date.
   * @private
   * @param {Number} event - Event received from calendar with the new central date.
   * @returns {void}
   */
  handleCalendarCentralDateChange(event) {
    const match = this.util.datesMatch(event.detail.date, this.centralDate);

    if (!match) {
      this.centralDate = event.detail.date;
    }
  }

  /**
   * Sets the datepicker's values to the auro-calendar-cell that was clicked.
   * @private
   * @param {Number} time - Unix timestamp to be converted to a date.
   * @returns {void}
   */
  handleCellClick(time) {
    this.cellClickActive = true;

    const newDate = this.convertWcTimeToDate(time);

    if (this.validDateStr(newDate)) {
      if (this.inputList.length > 1) {
        if (!this.value || !this.validDateStr(this.value)) {
          this.value = newDate;
        } else if (!this.valueEnd || !this.validDateStr(this.valueEnd)) {
          this.valueEnd = newDate;
        } else {
          this.value = newDate;
          this.valueEnd = '';
        }
      } else {
        this.value = newDate;
      }
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('calendarFocusDate')) {
      this.handleFocusDateChange();
    }

    if (changedProperties.has('calendarStartDate')) {
      this.calendar.setAttribute('calendarStartDate', this.getAttribute('calendarStartDate'));
    }

    if (changedProperties.has('calendarEndDate')) {
      this.calendar.setAttribute('calendarEndDate', this.getAttribute('calendarEndDate'));
    }

    if (changedProperties.has('minDate')) {
      if (!this.calendarFocusDate && !this.value) {
        this.calendarFocusDate = this.minDate;
      }
    }

    if (changedProperties.has('value')) {
      if (!this.calendarFocusDate) {
        this.calendarFocusDate = this.value;
      }

      if (this.cellClickActive) {
        this.cellClickActive = false;
      }

      if (this.value && this.validDateStr(this.value)) {
        if (this.calendar.dateFrom !== this.value) {
          this.calendar.dateFrom = this.convertToWcValidTime(this.value);
        }
      } else {
        if (this.inputList[0].value !== this.value) {
          if (this.value) {
            this.inputList[0].value = this.value;
          } else {
            this.inputList[0].value = '';
          }
        }

        if (this.calendar.dateFrom !== undefined) {
          this.calendar.dateFrom = undefined;
        }
      }

      // update the inputs
      if (this.inputList[0].value !== this.value) {
        if (this.value) {
          this.inputList[0].value = this.value;
        } else {
          this.inputList[0].value = '';
        }
      }
    }

    if (changedProperties.has('valueEnd') && this.inputList[1]) {
      // update the calendar
      if (this.valueEnd && this.validDateStr(this.valueEnd)) {
        this.calendar.dateTo = this.convertToWcValidTime(this.valueEnd);
      } else {
        if (this.inputList[1].value !== this.valueEnd) {
          if (this.valueEnd) {
            this.inputList[1].value = this.valueEnd;
          } else {
            this.inputList[1].value = '';
          }
        }

        if (this.calendar.dateTo !== undefined) {
          this.calendar.dateTo = undefined;
        }
      }

      // update the inputs
      if (this.inputList[1].value !== this.valueEnd) {
        if (this.valueEnd) {
          this.inputList[1].value = this.valueEnd;
        } else {
          this.inputList[1].value = '';
        }
      }
    }

    if (changedProperties.has('error')) {
      if (this.error) {
        this.inputList[0].error = this.error;
      } else {
        this.dropdown.removeAttribute('error');
        this.inputList[0].removeAttribute('error');
        this.errorMessage = undefined;
        this.inputList[0].validate();
      }

      this.requestUpdate();
    }

    if (this.value && this.valueEnd && this.validDateStr(this.value) && this.validDateStr(this.valueEnd)) {
      if (new Date(this.value) > new Date(this.valueEnd)) {
        this.valueEnd = undefined;
      }
    }

    // This resets the datepicker when the minDate is set to a new value that is
    // a later date than the current value date
    if (changedProperties.has('minDate')) {
      if (this.minDate) {
        const minDateMonth = Number(this.minDate.charAt(1));

        // This sets the visible month of the calendar to the minDate when the minDate is later
        // than the current visible date
        if (minDateMonth > this.calendar.month) {
          this.centralDate = this.minDate;
        }

        if (this.value) {
          if (new Date(this.minDate).getTime() > new Date(this.value).getTime()) {
            this.value = undefined;

            if (this.range && this.valueEnd) {
              this.valueEnd = undefined;
            }

            this.centralDate = this.minDate;
          }
        }
      }
    }

    // This resets the datepicker when the maxDate is set to a new value that is
    // an earlier date than the current value date
    if (changedProperties.has('maxDate')) {
      if (this.maxDate) {
        if (this.value) {
          if (new Date(this.maxDate).getTime() < new Date(this.value).getTime()) {
            this.value = undefined;

            if (this.range && this.valueEnd) {
              this.valueEnd = undefined;
            }

            this.centralDate = this.maxDate;
          }
        }
      }
    }

    if (changedProperties.has('centralDate')) {
      this.handleCentralDateChange();
    }
  }

  firstUpdated() {
    this.configureDropdown();
    this.configureInput();
    this.configureCalendar();
    this.configureDatepicker();
    this.notifyReady();

    window.addEventListener('resize', () => {
      this.handleReadOnly();
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <${this.dropdownTag}
          for="dropdownMenu"
          bordered
          rounded
          ?disabled="${this.disabled}"
          ?error="${this.validity !== undefined && this.validity !== 'valid'}"
          disableEventShow
          noHideOnThisFocusLoss
          part="dropdown">
          <div slot="trigger" class="dpTriggerContent" part="trigger">
            <${this.inputTag}
              auro-input
              id="${this.generateRandomString(12)}"
              bordered
              class="dateFrom"
              ?required="${this.required}"
              noValidate
              .error="${this.error}"
              .max="${this.maxDate}"
              .min="${this.minDate}"
              setCustomValidityValueMissing="${this.setCustomValidityValueMissing}"
              setCustomValidityRangeOverflow="${this.setCustomValidityRangeOverflow}"
              setCustomValidityRangeUnderflow="${this.setCustomValidityRangeUnderflow}"
              ?disabled="${this.disabled}"
              .type="${this.type}"
              part="input">
              <span slot="label"><slot name="fromLabel"></slot></span>
            </${this.inputTag}>
            ${this.range ? html`
              <${this.inputTag}
                auro-input
                id="${this.generateRandomString(12)}"
                bordered
                class="dateTo"
                ?required="${this.required}"
                noValidate
                .max="${this.maxDate}"
                .min="${this.minDate}"
                setCustomValidityValueMissing="${this.setCustomValidityValueMissing}"
                setCustomValidityRangeOverflow="${this.setCustomValidityRangeOverflow}"
                setCustomValidityRangeUnderflow="${this.setCustomValidityRangeUnderflow}"
                ?disabled="${this.disabled}"
                .type="${this.type}"
                part="input">
                <span slot="label"><slot name="toLabel"></slot></span>
              </${this.inputTag}>
            ` : undefined}
          </div>
          <div class="calendarWrapper" part="calendarWrapper">
            <auro-calendar
              ?noRange="${!this.range}"
              .min="${this.convertToWcValidTime(new Date(this.minDate))}"
              .max="${this.convertToWcValidTime(new Date(this.maxDate))}"
              .maxDate="${this.maxDate}"
              .minDate="${this.minDate}"
              part="calendar"
              @auroCalendar-centralDateChanged="${this.handleCalendarCentralDateChange}"
            >
              <slot slot="mobileDateLabel" name="mobileDateLabel"></slot>
              <span slot="mobileDateFromStr">${this.value ? this.getMobileDateStr(this.value) : html`<span class="placeholderDate">MM/DD/YYYY</span>`}</span>
              ${this.range ? html`<span slot="mobileDateToStr">${this.valueEnd ? this.getMobileDateStr(this.valueEnd) : html`<span class="placeholderDate">MM/DD/YYYY</span>`}</span>` : undefined}
            </auro-calendar>
          </div>
          <span slot="helpText" part="helpTextSpan">
            <!-- Help text and error message template -->
            ${!this.validity || this.validity === undefined || this.validity === 'valid'
              ? html`
                <slot name="helpText"></slot>
              ` : html`
                <p class="datepickerElement-helpText" id="${this.uniqueId}" role="alert" aria-live="assertive" part="helpText">
                  ${this.errorMessage}
                </p>`
            }
          </span>
        </${this.dropdownTag}>
      </div>
    `;
  }
}

// define the name of the custom component

if (!customElements.get('auro-datepicker')) {
  customElements.define('auro-datepicker', AuroDatePicker);
}
