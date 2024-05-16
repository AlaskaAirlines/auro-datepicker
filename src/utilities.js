export class AuroDatepickerUtilities {

  /**
   * Returns true if value passed in is a valid date.
   * @private
   * @param {String} date - Date to validate.
   * @returns {Boolean}
   */
  validDateStr(date) {
    const dateStrLength = 10;

    if (date.length === dateStrLength && Date.parse(date)) {
      return true;
    }

    return false;
  }

  /**
   * Converts any date object to a date object representing the first day of the month.
   * @param {Object} date - Date to convert to the first day of the month.
   * @returns {Object} Returns the auro-calendar-months HTML.
   */
  convertDateToFirstOfMonth(date) {
    const dateObj = new Date(date);

    return new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
  }

  /**
   * Calculate the number of months between two dates.
   * @param {Object} date1 - First date to compare.
   * @param {Object} date2 - Second date to compare.
   * @returns {Number} Returns the number of months between the two dates.
   */
  monthDiff(date1, date2) {
    let months = 0;
    months = (date2.getFullYear() - date1.getFullYear()) * 12; // eslint-disable-line no-magic-numbers
    months -= date1.getMonth();
    months += date2.getMonth();
    months += 1;

    return months <= 0 ? 0 : months;
  }

  /**
   * Convert a date object to string format.
   * @private
   * @param {Object} date - Date to convert to string.
   * @returns {Object} Returns the date as a string.
   */
  getDateAsString(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();

    const dateStr = `${month}/${day}/${year}`;

    return dateStr;
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

  /**
   * Compares two dates to see if they match.
   * @private
   * @param {Object} date1 - First date to compare.
   * @param {Object} date2 - Second date to compare.
   * @returns {Boolean} Returns true if the dates match.
   */
  datesMatch(date1, date2) {
    const match = new Date(date1).getTime() === new Date(date2).getTime();

    return match;
  }
}
