export function setError(elem) {
  document.querySelector('#undefinedValueExampleBtnAddError').addEventListener('click', () => {
    elem.setAttribute('error', 'Custom error message');
  })

  document.querySelector('#undefinedValueExampleBtnRemoveError').addEventListener('click', () => {
    elem.removeAttribute('error');
  })
}
