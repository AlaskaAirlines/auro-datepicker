function initializeExample(elements, callback, elementsPendingReady, retryCount) {
  if (!elementsPendingReady) {
    elementsPendingReady = elementsPendingReady || [];

    if (typeof elements === 'string') {
      elementsPendingReady.push(elements);
    } else {
      elementsPendingReady = elements;
    }

    initializeExample(elements, callback, elementsPendingReady);
  } else {
    let readyCount = 0;

    elementsPendingReady.forEach(element => {
      if (document.querySelector(element) && document.querySelector(element)['ready']) {
        readyCount++;
      }
    });

    retryCount = retryCount || 0;

    if (elementsPendingReady.length != readyCount && retryCount < 10) {
      retryCount = retryCount + 1;
      setTimeout(initializeExample, 500, elements, callback, elementsPendingReady, retryCount);
    } else {
      callback(elements);
    }
  }
}

/**
 * Programmatically focus the datepicker input
 */
import { focusExample } from './../apiExamples/focus.js';

(function(){
  initializeExample('#focusExample', function(selector) {
    focusExample(document.querySelector(selector));
  });
}());

/**
 * Programmatically set value
 */
import { valueExample } from './../apiExamples/value.js';

(function(){
  initializeExample('#valueExample', function(selector) {
  valueExample(document.querySelector(selector));
  });
}());

/**
 * Programmatically set value
 */
import { valueAlert } from './../apiExamples/alertValue.js';

(function(){
  initializeExample('#datePickerValueAlert', function(selector) {
    valueAlert(document.querySelector(selector));
  });
}());

/**
 * Programmatically set error attribute
 */
import { setError } from './../apiExamples/error';

(function(){
  initializeExample('#errorExample', function(selector) {
    setError(document.querySelector(selector));
  });
}());

/**
 * Programmatically set minDate to a future date
 */
import { futureMinDate } from '../apiExamples/minDate';

(function(){
  initializeExample('#minDateExample', function(selector) {
    futureMinDate(document.querySelector(selector));
  });
}());

/**
 * Programmatically set maxDate to today's date
 */
import { pastMaxDate } from '../apiExamples/maxDate';

(function(){
  initializeExample('#maxDateExample', function(selector) {
    pastMaxDate(document.querySelector(selector));
  });
}());
