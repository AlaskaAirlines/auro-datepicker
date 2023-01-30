export function futureMinDate(elem) {
  const button = document.getElementById('minDateChange');

  const today = elem.formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = elem.formatDateString(nextWeek);

  elem.setAttribute('value', today);
  elem.setAttribute('minDate', today);

  button.addEventListener('click', () => {
    elem.setAttribute('minDate', nextWeek);
  });
}
