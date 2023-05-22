export function focusExample() {
  const focusExample = document.querySelector('#focusExample');
  const focusExampleBtn = document.querySelector('#focusExampleBtn');

  focusExampleBtn.addEventListener('click', () => {
    focusExample.focus();
  });
}
