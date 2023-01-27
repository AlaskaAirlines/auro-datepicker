// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines, max-depth */

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @prop {String} value - Value selected for the date picker.
 * @attr {String} error - When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value.
 * @attr {String} validity - Specifies the `validityState` this element is in.
 * @attr {String} setCustomValidity - Sets a custom help text message to display for all validityStates.
 * @attr {String} setCustomValidityValueMissing - Help text message to display when validity = `valueMissing`;
 * @attr {Boolean} disabled - If set, disables the datepicker.
 * @attr {Boolean} noValidate - If set, disables auto-validation on blur.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @prop {Object} centralDate - The date that determines the currently visible month.
 * @prop {Date} maxDate - Maximum date. All dates after will be disabled.
 * @prop {Date} minDate - Minimum date. All dates before will be disabled.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @fires auroDatePicker-ready - Notifies that the component has finished initializing.
 * @fires auroDatePicker-valueSet - Notifies that the component has a new value set.
 */

// build the component class
class AuroDatePicker extends LitElement {
  constructor() {
    super();

    this.disabled = false;
    this.required = false;
    this.noValidate = false;
    this.validity = undefined;
    this.value = undefined;

    /**
     * @private
     */
    this.type = "month-day-year";

    /**
     * @private
     */
    this.activeLabel = false;

    // Lion Calendar options
    this.maxDate = undefined;
    this.minDate = undefined;

    /**
     * @private
     */
    this.selectedDate = undefined;

    /**
     * @private
     */
    this.disableDates = undefined;

    /**
     * @private
     */
    this.firstDayOfWeek = 0;

    /**
     * @private
     */
    this.locale = undefined;

    /**
     * @private
     */
    this.weekdayHeaderNotation = 'narrow'; /* long|short|narrow */ // eslint-disable-line no-inline-comments
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
        type: String,
        reflect: true
      },
      setCustomValidity: {
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

      // lion calendar attributes
      centralDate: {
        type: Date,
        reflect: true
      },
      disableDates: {
        type: String,
        reflect: true
      },
      firstDayOfWeek: {
        type: Number,
        reflect: true
      },
      locale: {
        type: String,
        reflect: true
      },
      maxDate: {
        type: Date,
        reflect: true
      },
      minDate: {
        type: Date,
        reflect: true
      },
      selectedDate: {
        type: Date,
        reflect: true
      },
      weekdayHeaderNotation: {
        type: String,
        reflect: true
      },

      /**
       * @private
       */
      availableOptions: { type: Array },

      /**
       * @private
       */
      displayValue: { type: String },

      /**
       * @private
       */
      optionActive: { type: Object },

      /**
       * @private
       */
      msgSelectionMissing: { type: String }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * Focuses the combobox trigger input.
   * @returns {void}
   */
  focus() {
    this.shadowRoot.querySelector('auro-dropdown').querySelector('auro-input').
      focus();
  }

  /**
   * Determines the validity state of the element.
   * @private
   * @returns {void}
   */
  validate() {
    this.validity = undefined;
    this.removeAttribute('validity');
    this.setCustomValidity = '';

    // Handle error attribute change regardless of focus
    if (this.hasAttribute('error')) {
      this.validity = 'customError';
      this.setCustomValidity = this.error;
    } else if (!this.contains(document.activeElement)) {
      if (this.value !== undefined) {
        this.validity = 'valid';

        if (this.required && this.value !== undefined && this.value.length === 0) {
          this.validity = 'valueMissing';
          this.input.validity = 'valueMissing';
        } else {
          const date = new Date(this.input.value);

          if (this.maxDate) {
            if (new Date(new Date(this.maxDate).toDateString()) < new Date(date.toDateString())) {
              this.validity = 'rangeOverflow';
              this.input.validity = 'rangeOverflow';
            }
          }

          if (this.minDate) {
            if (new Date(new Date(this.minDate).toDateString()) > new Date(date.toDateString())) {
              this.validity = 'rangeUnderflow';
              this.input.validity = 'rangeUnderflow';
            }
          }
        }
      }
    }

    if (this.validity) {
      if (this.validity !== 'valid') {
        this.dropdown.setAttribute('error', '');
      } else {
        this.dropdown.removeAttribute('error');
      }
    } else {
      this.dropdown.removeAttribute('error');
    }
  }

  /**
   * Converts date object into a string.
   * @private
   * @param {Object} date - Date to convert.
   * @returns {string} Date formatted as a string.
   */
  formatDateString(date) {
    /* eslint-disable prefer-template, no-magic-numbers */
    const dd = String("0" + date.getDate()).slice(-2);
    const mm = String("0" + (date.getMonth() + 1)).slice(-2);
    /* eslint-enable prefer-template, no-magic-numbers */
    const yyyy = date.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  }

  /**
   * Handle changes to the input value and trigger changes that should result.
   * @private
   * @returns {void}
   */
  handleInputValueChange() {
    const lengthOfValidDateStr = 10;

    if (this.value !== this.input.value) {
      this.value = this.input.value;

      const date = new Date(this.input.value);

      /**
       * We can't rely on Date.parse() to check if a full date has been entered.
       * Entering even a single digit will return a valid date.
       * Check if the full date has been typed in by looking at the length of the value.
       */
      if (this.input.value.length === lengthOfValidDateStr && this.validDate(date)) {
        if (!this.validDate(this.calendar.selectedDate)) {
          this.calendar.selectedDate = new Date(this.input.value);
        }

        /**
         * Additional work if the calendar is not in sync with the input.
         */

        if (this.calendar.selectedDate.toDateString() !== new Date(this.input.value).toDateString()) {
          this.calendar.selectedDate = new Date(this.input.value);
        }

        if (this.calendar.centralDate.toDateString() !== new Date(this.input.value).toDateString()) {
          this.calendar.centralDate = new Date(this.input.value);
        }

        this.dispatchEvent(new CustomEvent('auroDatePicker-valueSet', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));
      } else if (this.calendar.selectedDate !== undefined) {
        this.calendar.selectedDate = undefined;
      }

    }

    // This check prevents the component showing an error when a required datepicker is first rendered
    if (this.input.value) {
      this.validate();
    }
  }

  /**
   * Binds all behavior needed to the dropdown after rendering.
   * @private
   * @returns {void}
   */
  configureDropdown() {
    this.dropdown = this.shadowRoot.querySelector('auro-dropdown');

    this.dropdown.addEventListener('auroDropdown-ready', () => {
      this.auroDropdownReady = true;
    });

    this.dropdown.setAttribute('role', 'dialog');

    this.dropdown.addEventListener('auroDropdown-triggerClick', () => {
      if (!this.isPopoverVisible) {
        this.dropdown.show();
      }
    });

    this.dropdown.addEventListener('auroDropdown-toggled', () => {
      this.setAttribute('aria-expanded', this.dropdown.isPopoverVisible);
      this.activeLabel = this.dropdown.isPopoverVisible;
      if (this.activeLabel) {
        this.input.setAttribute('activeLabel', '');
      } else if (!this.input.value || this.input.value === undefined || this.input.value.length === 0) {
        this.input.removeAttribute('activeLabel');
      }
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
    this.input = this.dropdown.querySelector('auro-input');

    this.input.addEventListener('auroInput-ready', () => {
      this.auroInputReady = true;
    });

    this.input.addEventListener('auroInput-validityChange', () => {
      this.valdity = this.input.validity;
    });

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
    });

    /**
     * Validate every time we remove focus from the datepicker.
     */
    this.addEventListener('focusout', () => {
      if (document.activeElement !== this) {
        this.validate();
      }
    });

    this.input.addEventListener('input', () => {
      this.handleInputValueChange();
    });

    // auto-show bib when manually editing the input value
    this.input.addEventListener('keyup', (evt) => {
      if (evt.key.length === 1 || evt.key === 'Delete' || evt.key === 'Backspace') {
        this.dropdown.show();
      }
    });

    this.triggerInput.addEventListener('auroInput-helpText', (evt) => {
      this.auroInputHelpText = evt.detail.message;
    });
  }

  /**
   * Binds all behavior needed to the dropdown after rendering.
   * @private
   * @returns {void}
   */
  configureCalendar() {
    this.calendar = this.shadowRoot.querySelector('auro-calendar');

    this.calendar.addEventListener('auroCalendar-ready', () => {
      this.auroCalendarReady = true;
    });

    this.calendar.addEventListener('auroCalendar-dateSelected', () => {
      this.input.value = this.formatDateString(this.calendar.selectedDate);
      this.centralDate = this.calendar.selectedDate;

      // console message for error occuring when date is selected via calendar
      console.warn('reference https://github.com/AlaskaAirlines/auro-datepicker/issues/79 for error below'); // eslint-disable-line no-console
    });

    this.calendar.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this.input.focus();
      }
    });
  }

  /**
   * Returns true if value passed in is a valid date.
   * @private
   * @param {Object} date - Date to validate.
   * @returns  {boolean}
   */
  validDate(date) {
    if (isNaN(date) || date === 'Invalid Date') {
      return false;
    }

    return true;
  }

  updated(changedProperties) {
    if (changedProperties.has('value') && this.value) {
      if (this.value !== this.input.value) {
        this.input.value = this.formatDateString(new Date(this.value));
      }

      this.validate();
    }

    if (changedProperties.has('centralDate')) {
      this.calendar.centralDate = new Date(this.centralDate);
    }

    if (changedProperties.has('error')) {
      this.validate();
    }

    if (changedProperties.has('setCustomValidity')) {
      this.input.setAttribute('setCustomValidity', this.setCustomValidity);
    }

    if (changedProperties.has('setCustomValidityValueMissing')) {
      this.input.setAttribute('setCustomValidityValueMissing', this.setCustomValidityValueMissing);
    }
  }

  firstUpdated() {
    this.configureDropdown();
    this.configureInput();
    this.configureCalendar();

    // Close the datepicker when clicking outside it
    document.addEventListener('click', (evt) => {
      if (!evt.composedPath().includes(this)) {
        this.dropdown.hide();
      }
    });

    document.activeElement.addEventListener('focusin', () => {
      if (document.activeElement !== document.querySelector('body') && !this.contains(document.activeElement)) {
        this.dropdown.hide();
      }
    });

    this.checkReadiness();
  }

  /**
   * @private
   * @returns {void} Marks the component as ready and sends event.
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
   * Monitors readiness of peer dependencies and begins work that should only start when ready.
   * @private
   * @returns {void}
   */
  checkReadiness() {
    if (this.auroDropdownReady && this.auroInputReady && this.auroCalendarReady) {
      this.readyActions();
      this.notifyReady();
    } else {
      // Start a retry counter to limit the retry count
      if (!this.readyRetryCount && this.readyRetryCount !== 0) {
        this.readyRetryCount = 0;
      } else {
        this.readyRetryCount += 1;
      }

      const readyTimer = 0;
      const readyRetryLimit = 200;

      if (this.readyRetryCount <= readyRetryLimit) {
        setTimeout(() => {
          this.checkReadiness();
        }, readyTimer);
      }
    }
  }

  /**
   * Functionality that should not be performed until the datepicker is in a ready state.
   * @private
   * @returns {void}
   */
  readyActions() {
    // Set the initial value in auro-calendar if defined
    if (this.hasAttribute('value') && this.getAttribute('value').length > 0) {
      this.calendar.selectedDate = new Date(this.value);
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div>
        <auro-dropdown
          for="dropdownMenu"
          bordered
          rounded
          ?disabled="${this.disabled}"
          disableEventShow
          noHideOnThisFocusLoss>
          <auro-input
            slot="trigger"
            bordered
            ?required="${this.required}"
            ?activeLabel="${this.activeLabel}"
            ?noValidate="${this.noValidate}"
            .error="${this.error}"
            ?disabled="${this.disabled}"
            .type="${this.type}">
            <slot name="label" slot="label"></slot>
          </auro-input>
          <div class="calendarWrapper">
            <auro-calendar
              .firstDayOfWeek=${this.firstDayOfWeek}
              .locale=${new Date(this.locale)}
              .minDate=${new Date(this.minDate)}
              .maxDate=${new Date(this.maxDate)}
              .weekdayHeaderNotation=${this.weekdayHeaderNotation}>
            </auro-calendar>
          </div>
          <span slot="helpText">
            ${this.auroInputHelpText
              ? html`
                ${this.auroInputHelpText}
              `
              : html`
                <slot name="helpText"></slot>
              `
            }
          </span>
        </auro-dropdown>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-datepicker")) {
  customElements.define("auro-datepicker", AuroDatePicker);
}
