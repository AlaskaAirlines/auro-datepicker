export function focusExample() {
  const focusExampleElem = document.querySelector('#focusExampleElem');
  const focusExampleBtn = document.querySelector('#focusExampleBtn');
  const focusExampleBtnTwo = document.querySelector('#focusExampleBtnTwo');

  focusExampleBtn.addEventListener('click', () => {
    focusExampleElem.focus();
  });

  focusExampleBtnTwo.addEventListener('click', () => {
    focusExampleElem.focus('endDate');
  });
}
