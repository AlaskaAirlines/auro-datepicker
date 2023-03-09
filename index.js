import { AuroCalendar } from "./src/auro-calendar";
import { AuroCalendarMonth } from "./src/auro-calendar-month";
import { AuroCalendarCell } from "./src/auro-calendar-cell";
import { AuroDatePicker } from "./src/auro-datepicker";

/**
 * Register Custom Element.
 * @param {String} name - Name to use for custom element.
 * @param {Function} className - Class name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name, className) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends className {});
  }
}

registerComponent('auro-calendar', AuroCalendar);
registerComponent('auro-calendar-cell', AuroCalendarCell);
registerComponent('auro-calendar-month', AuroCalendarMonth);
registerComponent('auro-datepicker', AuroDatePicker);
