import styleCss from "./style-auro-calendar-cell-css";

import { RangeDatepickerCell } from "../node_modules/wc-range-datepicker/dist/src/range-date-picker-cell";

export class AuroCalendarCell extends RangeDatepickerCell {
  constructor() {
    super();
  }

  static get styles() {
    return [
      // ...super.styles,
      styleCss
    ];
  }
}
