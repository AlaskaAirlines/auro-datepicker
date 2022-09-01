export function focusExample(elem) {
  document.querySelector('#focusExampleBtn').addEventListener('click', () => {
    elem.focus();
  })
}
