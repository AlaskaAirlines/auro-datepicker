export function pastMaxDate(elem) {
  const changeMaxDateButton = document.getElementById('maxDateChange');
  const resetButton = document.getElementById('resetMaxDate');

  const today = elem.formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = elem.formatDateString(nextWeek);

  elem.setAttribute('value', nextWeek);
  elem.setAttribute('maxDate', nextWeek);

  changeMaxDateButton.addEventListener('click', () => {
    elem.setAttribute('maxDate', today);
  });

  resetButton.addEventListener('click', () => {
    elem.setAttribute('value', nextWeek);
    elem.setAttribute('maxDate', nextWeek);
  });
}
