import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { format, getTime, startOfDay } from 'date-fns';
import { enUS } from 'date-fns/esm/locale';

import styleCss from "./style-auro-calendar-cell-css";

export class AuroCalendarCell extends LitElement {
  constructor() {
    super();

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

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      day:           { type: Object },
      selected:      { type: Boolean },
      hovered:       { type: Boolean },
      dateTo:        { type: String },
      dateFrom:      { type: String },
      month:         { type: String },
      min:           { type: Number },
      max:           { type: Number },
      disabled:      { type: Boolean },
      disabledDays:  { type: Array },
      hoveredDate:   { type: String },
      isCurrentDate: { type: Boolean },
      locale:        { type: Object }
    };
  }

  get locale() {
    return this._locale ? this._locale : enUS;
  }

  set locale(value) {
    const oldValue = this._locale;
    this._locale = value;
    this.requestUpdate('locale', oldValue);
  }

  static get styles() {
    return [
      // ...super.styles,
      styleCss
    ];
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
    var _a;
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('date-is-selected', {
          detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
      }));
    }
  }

  handleHover() {
    var _a;
    this.dispatchEvent(new CustomEvent('date-is-hovered', {
      detail: { date: (_a = this.day) === null || _a === void 0 ? void 0 : _a.date },
    }));
  }

  isSelected(selected) {
    return selected ? 'selected' : '';
  }

  isHovered(hovered) {
    return hovered ? 'inRange' : '';
  }

  isEnabled(day, min, max, disabledDays) {
    this.disabled = false;
    if (disabledDays && day && day.date) {
      if (day.date < min ||
        day.date > max ||
        disabledDays.findIndex(disabledDay => parseInt(disabledDay, 10) === day.date) !== -1) {
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

  updated(properties) {
    if (properties.has('dateFrom') ||
        properties.has('dateTo') ||
        properties.has('hoveredDate') ||
        properties.has('day')) {
        this.dateChanged(this.dateFrom, this.dateTo, this.hoveredDate, this.day);
    }
  }

  render() {
    var _a, _b;
    return html `
    <button
      @click="${this.handleTap}"
      @mouseover="${this.handleHover}"
      @focus="${this.handleHover}"
      class="day ${this.isCurrentDate ? 'currentDate' : ''} ${this.isSelected(this.selected)} ${this.isHovered(this.hovered)} ${this.isEnabled(this.day, this.min, this.max, this.disabledDays)}"
      ?disabled="${this.disabled}"
      title="${this.getTitle((_a = this.day) === null || _a === void 0 ? void 0 : _a.date)}"
      tabindex="-1">
      <div class="currentDayMarker">${(_b = this.day) === null || _b === void 0 ? void 0 : _b.title}</div>
    </button>
  `;
  }
}

/*




JASON






JORDAN
- add prev/next buttons + increment/decrement this.month
- update validity based on comments in file
- update style flex direction auro-calendar from row to col based on media query for mobile breakpoint
- in mobile
  - add botton fixed container with "done" button and white gradient
  - add "back" button to left of trigger content -- WTF does this thing do?














firstUpdated() {
  this.inputFrom = document.querySelector('auro-input.dateFrom');
  this.inputTo = document.querySelector('auro-input.dateTo');
  this.calendar = document.querySelector('auro-calendar');

  this.inputFrom.addEventListener('input', {
    if (this.inputFrom.value !== this.value) {
      this.value = this.inputFrom.value;
    }
  })

  this.inputTo.addEventListener('input', {
    if (this.inputTo.value !== this.valueEnd) {
      this.valueEnd = this.inputTo.value;
    }
  })

  this.calendar.addEventListener('auroCalendar_dateSelected', {
    if (this.inputFrom.value !== this.calendar.dateFrom && this.calendar.dateFrom !== undefined) {
      this.inputFrom.value = this.calendar.dateFrom;
    }

    if (this.calendar.dateTo === undefined) {
      if (this.inputTo.value !== '') {
        this.inputTo.value = ''; // need to not pass undefined back up to input after the first interaction or it breaks validation logic
      }
    } else if (this.inputTo.value !== this.calendar.dateTo) {
      this.inputTo.value = this.calendar.dateTo;
    }
  })
}

updated(changedProperties) {
  if (changedProperties.has('value')) {
    if (this.value && this.value === validDateStr(this.value)) {
      if (calendar.dateFrom !== this.value) {
        calendar.dateFrom = this.value;
      }
    } else {
      if (this.inputFrom.value !== this.value) {
        this.inputFrom.value = this.value;
      }

      if (calendar.dateFrom !== undefined) {
        calendar.dateFrom = undefined;
      }
    }
  }

  if (changedProperties.has('valueEnd')) {
    if (this.valueEnd && this.valueEnd === validDateStr(this.valueEnd)) {
      // what happens if you pass this to calendar without calender already having a fromDate set?

      this.calender.dateTo = this.valueEnd;
    } else {
      if (this.inputTo.value !== this.valueEnd) {
        this.inputTo.value = this.valueEnd;
      }

      if (calendar.dateTo !== undefined) {
        calendar.dateTo = undefined;
      }
    }
  }
}

*/

/**
 * SINGLE INPUT SCENARIOS
 */

// dp.value
  // '03/20/2023'
  // 1. calendar.dateFrom = dp.value
  // 2. input.dateFrom.value = calendar.dateFrom
  // EOL

  // '0'
  // 1. input.dateFrom.value = dp.value | '0'
  // 2. calendar.dateFrom = undefined;
  // EOL

  // undefined
  // 1. input.dateFrom.value = undefined;
  // 2. calendar.dateFrom = undefined
  // EOL

// input.value

  // '03/20/2023'
  // 1. dp.value = input.dateFrom.value
  // 2. calendar.dateFrom = dp.value
  // EOL

  // '0'
  // 1. dp.value = input.dateFrom.value
  // 2. calendar.dateFrom = undefined;
  // EOL

  // undefined
  // 1. dp.value = input.dateFrom.value
  // 2. calendar.dateFrom = undefined;
  // EOL

// calendar.value

  // in single date selection it is only ever possible for
  // calendar to set and return a valid date.

  // '03/20/2023'
  // 1. input1.value = calendar.from.value
  // 2. dp.value = input1.value
  // EOL

/**
 * RANGE INPUT SCENARIOS
 */

///////////
// EDIT DP.VALUE
///////////

// dp.value = '03/20/2023' && dp.valueEnd === undefined
  // 2. calendar.dateFrom = dp.value
  // 3. this.inputFrom.value = this.calendar.dateFrom
  // EOL

// dp.value = '0' && dp.valueEnd === undefined
  // false validDate
  // 2. this.inputFrom.value = this.value
  // 3. calendar.dateFrom = undefined
  // EOL

// dp.value = undefined && dp.valueEnd === undefined
  // 1. this.inputFrom.value = this.value
  // 2. calendar.dateFrom = undefined
  // EOL

///////////
// EDIT CALENDAR.dateFrom
///////////

// -----------------


// calendar.dateFrom = '03/20/2023' && dp.valueEnd === '03/20/2023'

// dF = '03/20/2023'
// iF = '03/20/2023'
// cF = '03/20/2023'

// dT = ''
// iT = ''
// cT = undefined




// CLICKING ON CALENDAR DATES

// calendar.dateFrom = '03/21/2023' && dp.valueEnd === '03/20/2023'
// calendar.dateFrom = '03/20/2023' && dp.valueEnd === '0'
// calendar.dateFrom = '03/20/2023' && dp.valueEnd === undefined

// calendar.dateTo = '03/20/2023' && dp.value === '03/20/2023'



// dp.value = '03/20/2023' && dp.valueEnd === '03/20/2023'
// dp.value = '03/21/2023' && dp.valueEnd === '03/20/2023'
// dp.value = '0' && dp.valueEnd === '03/20/2023'
// dp.value = undefined && dp.valueEnd === '03/20/2023'

// dp.value = '03/20/2023' && dp.valueEnd === '0'
// dp.value = '0' && dp.valueEnd === '0'
// dp.value = undefined && dp.valueEnd === '0'

// dp.valueEnd = '0' && dp.value === undefined
// dp.valueEnd = '03/20/2023' && dp.value === undefined
// dp.valueEnd = undefined && dp.value === undefined

// dp.valueEnd = '0' && dp.value === '0'
// dp.valueEnd = '03/20/2023' && dp.value === '0'
// dp.valueEnd = undefined && dp.value === '0'

// dp.valueEnd = '0' && dp.value === '03/20/2023
// dp.valueEnd = '03/20/2023' && dp.value === '03/20/2023
// dp.valueEnd = '03/19/2023' && dp.value === '03/20/2023
// dp.valueEnd = undefined && dp.value === '03/20/2023

// inputFrom.value = '03/20/2023' && dp.valueEnd === '03/20/2023'
// inputFrom.value = '03/21/2023' && dp.valueEnd === '03/20/2023'
// inputFrom.value = '0' && dp.valueEnd === '03/20/2023'
// inputFrom.value = undefined && dp.valueEnd === '03/20/2023'

// inputFrom.value = '03/20/2023' && dp.valueEnd === '0'
// inputFrom.value = '0' && dp.valueEnd === '0'
// inputFrom.value = undefined && dp.valueEnd === '0'

// inputFrom.value = '03/20/2023' && dp.valueEnd === undefined
// inputFrom.value = '0' && dp.valueEnd === undefined
// inputFrom.value = undefined && dp.valueEnd === undefined

// inputTo.value = '03/20/2023' && dp.value === '03/20/2023'
// inputTo.value = '03/19/2023' && dp.value === '03/20/2023'
// inputTo.value = '0' && dp.value === '03/20/2023'
// inputTo.value = undefined && dp.value === '03/20/2023'

// inputTo.value = '03/20/2023' && dp.value === '0'
// inputTo.value = '0' && dp.value === '0'
// inputTo.value = undefined && dp.value === '0'

// inputTo.value = '03/20/2023' && dp.value === undefined
// inputTo.value = '0' && dp.value === undefined
// inputTo.value = undefined && dp.value === undefined














  // '0'
  // 1. dp.valueEnd = ''
      // false validDate
        // a. this.inputTo.value = dp.valueEnd || ''
        // b. this.calender.dateTo = undefined
  // false validDate
  // 2. this.inputFrom.value = this.value
  // 3. calendar.dateFrom = undefined





  // 2. calendar.dateTo = dp.valueEnd

  // undefined
  // 1.

// dp.value2


// input1.value


// input2.value


// calendar.from.value


// calendar.to.value

  // undefined
  // 1. input.value = ''
  // 2. dp.value = input.value






// dF = undefined
// iF = undefined
// cF = undefined

// dT = undefined
// iT = undefined
// cT = undefined
