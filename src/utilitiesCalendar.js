import { AuroDatepickerUtilities } from './utilities.js';

export class CalendarUtilities {
  constructor() {
    this.util = new AuroDatepickerUtilities();
  }


  /**
   * Scroll the calendar month list to a given valid date if in mobile view.
   * @param {Object} elem - The calendar element.
   * @param {String} date - The date to scroll into view.
   * @returns {void}
   */
  scrollMonthIntoView(elem, date) {
    const mobileLayout = window.innerWidth < elem.mobileBreakpoint;

    if (this.util.validDateStr(date) && mobileLayout) {
      const month = new Date(date).getMonth() + 1;
      const year = new Date(date).getFullYear();
      const selector = `#month-${month}-${year}`;
      const monthElem = elem.shadowRoot.querySelector(selector);

      monthElem.scrollIntoView();
    }
  }

  /**
   * Sends an event requesting the dropdown bib be closed.
   * @private
   * @returns {void}
   */
  requestDismiss() {
    this.dispatchEvent(new CustomEvent('auroCalendar-dismissRequest', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  /**
   * Handles the visibility of the previous and next month buttons.
   * @private
   * @param {Object} elem - The auro-calendar element.
   * @returns {void}
   */
  assessNavigationButtonVisibility(elem) {

    /**
     * Hide/show the previous month button.
     */

    // 1. Compare the first rendered month to the earliest renderable month to determine if the previous month button should be hidden or shown
    if (!elem.hasAttribute('calendarStartDate') && !elem.hasAttribute('minDate')) {
      elem.showPrevMonthBtn = true;
    } else if (this.util.convertDateToFirstOfMonth(new Date(elem.centralDate)) <= elem.firstMonthRenderable) {
      elem.showPrevMonthBtn = false;
    } else {
      elem.showPrevMonthBtn = true;
    }

    /**
     * Hide/show the next month button.
     */

    // 1. Determine the last month that can possibly be rendered into the DOM.
    let lastRenderableMonth = undefined; // eslint-disable-line no-undef-init

    if (elem.hasAttribute('calendarEndDate')) {
      lastRenderableMonth = new Date(elem.getAttribute('calendarEndDate'));
    } else if (elem.hasAttribute('maxDate')) {
      lastRenderableMonth = new Date(elem.getAttribute('maxDate'));
    }

    if (lastRenderableMonth) {
      lastRenderableMonth = this.util.convertDateToFirstOfMonth(lastRenderableMonth);
    }

    // 2. Determine the last month currently rendered into the DOM.
    let lastRenderedMonth = new Date(elem.centralDate);

    if (!elem.noRange) {
      lastRenderedMonth = new Date(lastRenderedMonth.setMonth(lastRenderedMonth.getMonth() + 1));
    }

    lastRenderedMonth = this.util.convertDateToFirstOfMonth(lastRenderedMonth);

    // 3. Compare the two and choose to show or hide the next month button
    if (lastRenderedMonth >= lastRenderableMonth) {
      elem.showNextMonthBtn = false;
    } else {
      elem.showNextMonthBtn = true;
    }

    // Request an update to the component needed to actually show/hide the buttons in the DOM
    elem.requestUpdate();
  }

  /**
   * Handles the change of the centralDate property.
   * @param {Object} elem - The auro-calendar element.
   * @private
   * @returns {void}
   */
  centralDateChanged(elem) {
    this.assessNavigationButtonVisibility(elem);

    elem.dispatchEvent(new CustomEvent('auroCalendar-centralDateChanged', {
      detail: {
        bubbles: true,
        cancelable: false,
        composed: true,
        date: elem.centralDate
      }
    }));
  }

  /**
   * Updates the month and year when the user navigates to a different calendar month.
   * @param {Object} elem - The auro-calendar element.
   * @param {String} direction - The direction the user is navigating.
   * @returns {void}
   */
  handleMonthChange(elem, direction) {
    // Determine if the month number is going to be incremented or decremented
    let increment = 0;

    if (direction === 'next') {
      increment = 1;
    } else if (direction === 'prev') {
      increment = -1; // eslint-disable-line no-magic-numbers
    }

    // calculate the new central date
    const newCentralDate = new Date(elem.centralDate).setMonth(new Date(elem.centralDate).getMonth() + increment);

    // set the new central date to the first day of the month
    elem.centralDate = this.util.convertDateToFirstOfMonth(newCentralDate);
  }
}
