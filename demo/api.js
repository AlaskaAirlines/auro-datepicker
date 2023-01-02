function initializeExample(element, callback, retryCount) {
  const elem = document.querySelector(element);

  if (!elem || !elem.ready) {
    // If the component is not ready, retry until it is
    if (!retryCount && retryCount != 0) {
      retryCount = 0;
    } else {
      retryCount += 1;
    }

    if (retryCount < 10) {
      setTimeout(initializeExample, 500, element, callback, retryCount);
    } else {
      console.error('Unable to initialize functional example code for:', element);
    }
  } else {
    callback(elem);
  }
}

/**
 * Programmatically focus the datepicker input
 */
import { focusExample } from './../apiExamples/focus.js';

(function(){
  initializeExample('#focusExample', function(elem) {
    focusExample(elem);
  });
}());

/**
 * Programmatically set value
 */
import { valueExample } from './../apiExamples/value.js';

(function(){
  initializeExample('#valueExample', function(elem) {
  valueExample(elem);
  });
}());

/**
 * Programmatically set value
 */
import { valueAlert } from './../apiExamples/alertValue.js';

(function(){
  initializeExample('#datePickerValueAlert', function(elem) {
    valueAlert(elem);
  });
}());

/**
 * Programmatically set error attribute
 */
import { setError } from './../apiExamples/error';

(function(){
  initializeExample('#errorExample', function(elem) {
  setError(elem);
  });
}());
