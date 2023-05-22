export function errorExample() {
  const errorExample = document.querySelector('#errorExample');

  document.querySelector('#undefinedValueExampleBtnAddError').addEventListener('click', () => {
    errorExample.error = 'Custom New Error';
  })

  document.querySelector('#undefinedValueExampleBtnRemoveError').addEventListener('click', () => {
    console.warn('clickity click - remove error');
    errorExample.removeAttribute('error');
    console.warn('error example', errorExample.hasAttribute('error'));
  })
}
