import { AuroDatePicker } from "./src/auro-datepicker.js";
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-datepicker', AuroDatePicker);
