// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines */

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
 * @attr {Boolean} error - Sets a persistent error state (e.g. an error state returned from the server).
 * @attr {Boolean} disabled - If set, disables the datepicker.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 * @prop {Object} centralDate - The date that determines the currently visible month.
 * @prop {Date} maxDate - Maximum date. All dates after will be disabled.
 * @prop {Date} minDate - Minimum date. All dates before will be disabled.
 * @prop {Date | undefined} selectedDate - The selected date.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @fires auroDatePicker-ready - Notifies that the component has finished initializing.
 * @fires auroDatePicker-valueSet - Notifies that the component has a new value set.
 */

// build the component class
class AuroDatePicker extends LitElement {
  constructor() {
    super();

    this.value = undefined;
    this.error = false;

    /**
     * @private
     */
    this.inputValue = undefined;

    /**
     * @private
     */
    this.type = "month-day-year";

    // Lion Calendar options
    this.centralDate = new Date(); /* default to today */ // eslint-disable-line no-inline-comments

    this.maxDate = undefined;
    this.minDate = undefined;
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
   * Determines the element error state based on the `required` attribute and input value.
   * @private
   * @returns {void}
   */
  handleRequired() {
    if (this.required && !this.error) {
      if (!this.triggerInput.value || this.triggerInput.value.length === 0) {
        this.error = true;
      } else {
        this.error = false;
      }
    }
  }

  /**
   * Validates if the selected date is within defined range.
   * @private
   * @returns {void}
   */
  validateDate() {
    let error = false;

    if (this.minDate) {
      if (new Date(this.minDate) > new Date(this.value)) {
        error = true;
      }
    }

    if (this.maxDate) {
      if (new Date(this.maxDate) < new Date(this.value)) {
        error = true;
      }
    }

    this.error = error;
  }

  /**
   * Converts date object into a string.
   * @private
   * @param {Object} date - Date to convert.
   * @returns {string} Date formatted as a string.
   */
  formatDateString(date) {
    const dd = String(date.getDate());
    const mm = String(date.getMonth() + 1);
    const yyyy = date.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  }

  /**
   * Handle changes to the input value and trigger changes that should result.
   * @private
   * @returns {void}
   */
  handleInputValueChange() {

    /* Control the input label state based on input value. */
    const dateStrLength = 10;

    if (this.triggerInput.value.length < dateStrLength) {
      this.selectedDate = undefined;
      this.value = undefined;

      if (this.triggerInput.value.length === 0) {
        this.classList.remove('datepicker-filled');
      } else {
        this.dropdown.show();
      }
    } else {
      this.classList.add('datepicker-filled');

      this.value = undefined;

      /**
       * We can't rely on Date.parse() to check if a full date has been entered.
       * Entering even a single digit will return a valid date.
       * Check if the full date has been typed in by looking at the length of the value.
       */
      const lengthOfValidDateStr = 10;
      if (this.triggerInput.value.length === lengthOfValidDateStr) {
        this.value = this.selectedDate;
        this.inputValue = this.formatDateString(new Date(this.selectedDate));

        this.dispatchEvent(new CustomEvent('auroDatePicker-valueSet', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));

        /** Once we have a full date pass it to the calender for selection. */
        this.calendar.selectedDate = new Date(this.triggerInput.value);

        /**
         * Also make the newly selected year/month be the new central date
         * so that that month is in view.
         */
        this.calendar.centralDate = new Date(this.triggerInput.value);

        this.validateDate();
      }
    }

    this.handleRequired();
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector('auro-dropdown');
    this.triggerInput = this.dropdown.querySelector('[slot="trigger"');
    this.calendar = this.shadowRoot.querySelector('auro-calendar');
    this.input = this.dropdown.querySelector('auro-input');

    if (this.value) {
      this.selectedDate = new Date(this.value);
    }

    if (this.selectedDate) {
      this.selectedDate = new Date(this.selectedDate);
      this.value = new Date(this.selectedDate);
      this.centralDate = new Date(this.selectedDate);
      this.inputValue = this.formatDateString(new Date(this.selectedDate));
      this.classList.add('datepicker-filled');
    }

    this.dropdown.addEventListener('auroDropdown-ready', () => {
      this.auroDropdownReady = true;
    });

    this.calendar.addEventListener('auroCalendar-ready', () => {
      this.auroCalendarReady = true;
    });

    this.input.addEventListener('auroInput-ready', () => {
      this.auroInputReady = true;
    });

    this.input.addEventListener('blur', () => {
      this.handleRequired();
    });

    this.dropdown.setAttribute('role', 'dialog');

    this.dropdown.addEventListener('auroDropdown-triggerClick', () => {
      if (!this.isPopoverVisible) {
        this.dropdown.show();
      }
    });

    this.dropdown.addEventListener('auroDropdown-toggled', () => {
      this.setAttribute('aria-expanded', this.dropdown.isPopoverVisible);
    });

    /**
     * Use css transition effect tied to :focus-within to detect tabbing out of the datepicker
     * while the dropdown bib is open. Trap the focus in the datepicker while the bib is shown.
     */
    this.dropdown.addEventListener('transitionend', () => {
      this.input.focus();
    });

    if (!this.dropdown.hasAttribute('aria-expanded')) {
      this.dropdown.setAttribute('aria-expanded', this.dropdown.isPopoverVisible);
    }

    this.calendar.addEventListener('auroCalendar-dateSelected', () => {
      if (this.selectedDate !== this.calendar.selectedDate) {
        this.selectedDate = this.calendar.selectedDate;
        this.centralDate = this.calendar.selectedDate;
      }

      const year = this.calendar.selectedDate.getFullYear().toString();

      let month = this.calendar.selectedDate.getMonth();
      month += 1;
      month = month.toString();
      if (month.length === 1) {
        month = '0'.concat(month);
      }

      let date = this.calendar.selectedDate.getDate().toString();
      if (date.length === 1) {
        date = '0'.concat(date);
      }

      const dateString = month.concat('/', date, '/', year);

      this.input.value = dateString;
      this.handleInputValueChange();
      this.centralDate = new Date(dateString);
      this.input.focus();
    });

    this.calendar.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this.input.focus();
      }
    });

    this.input.addEventListener('input', () => {
      this.handleInputValueChange();
    });


    this.triggerInput.addEventListener('auroInput-helpText', (evt) => {
      this.auroInputHelpText = evt.detail.message;
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
      if (!this.readyRetryCount) {
        this.readyRetryCount = 0;
      } else {
        this.readyRetryCount += 1;
      }

      const readyTimer = 200;
      const readyRetryLimit = 20;

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
      // this.calendar.value = this.value;
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
          ?error="${this.error}"
          disableEventShow>
          <auro-input
            slot="trigger"
            borderless
            value="${this.inputValue}"
            ?required="${this.required}"
            ?noValidate="${this.noValidate}"
            ?disabled="${this.disabled}"
            ?error="${this.error}"
            .type="${this.type}">
            <slot name="label" slot="label"></slot>
          </auro-input>
          <div class="calendarWrapper">
            <auro-calendar
              .centralDate=${new Date(this.centralDate)}
              .firstDayOfWeek=${this.firstDayOfWeek}
              .locale=${new Date(this.locale)}
              .minDate=${new Date(this.minDate)}
              .maxDate=${new Date(this.maxDate)}
              .selectedDate=${new Date(this.selectedDate)}
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
