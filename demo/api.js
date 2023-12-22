import { alertValueExample } from './../apiExamples/alertValue.js';
import { errorExample } from './../apiExamples/error';
import { focusExample } from './../apiExamples/focus.js';
import { monthNamesExample } from './../apiExamples/monthNames';
import { populateSlotContentExample } from './../apiExamples/dynamicSlot.js';
import { updateMaxDateExample } from './../apiExamples/updateMaxDate';
import { updateMinDateExample } from './../apiExamples/updateMinDate';
import { validityExample } from './../apiExamples/validity';

export function initDatepickerApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    alertValueExample();
    errorExample();
    focusExample();
    monthNamesExample();
    populateSlotContentExample();
    updateMaxDateExample();
    updateMinDateExample();
    validityExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initDatepickerApiExamples(initCount + 1);
      }, 100);
    }
  }
}
