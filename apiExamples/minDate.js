export function futureMinDate(elem) {
  const changeMinDateButton = document.getElementById('minDateChange');
  const resetButton = document.getElementById('resetMinDate');

  const today = elem.formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = elem.formatDateString(nextWeek);

  elem.setAttribute('value', today);
  elem.setAttribute('minDate', today);

  changeMinDateButton.addEventListener('click', () => {
    elem.setAttribute('minDate', nextWeek);
  });

  resetButton.addEventListener('click', () => {
    elem.setAttribute('value', today);
    elem.setAttribute('minDate', today);
  });
}
