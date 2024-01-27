import { AuroDatePicker } from "./src/auro-datepicker.js";

/**
 * Register Custom Element.
 * @param {String} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroDatePicker {});
  }
}
