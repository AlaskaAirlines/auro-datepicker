const errorExample = document.querySelector('#errorExample');

document.querySelector('#undefinedValueExampleBtnAddError').addEventListener('click', () => {
  console.warn('clickity click - add new error');
  // errorExample.setAttribute('error', 'Custom error message New');
  errorExample.error = 'Custom New Error';
})

document.querySelector('#undefinedValueExampleBtnRemoveError').addEventListener('click', () => {
  console.warn('clickity click - remove error');
  // errorExample.removeAttribute('error');
  errorExample.removeAttribute('error');
  console.warn('error example', errorExample.hasAttribute('error'));
})
