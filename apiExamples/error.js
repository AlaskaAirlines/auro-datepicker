export function errorExample() {
  const errorExample = document.querySelector('#errorExample');

  document.querySelector('#undefinedValueExampleBtnAddError').addEventListener('click', () => {
    errorExample.error = 'Custom New Error';
  })

  document.querySelector('#undefinedValueExampleBtnRemoveError').addEventListener('click', () => {
    errorExample.removeAttribute('error');
  })
}
