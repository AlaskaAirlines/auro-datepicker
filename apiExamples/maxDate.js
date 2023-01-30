export function pastMaxDate(elem) {
  const button = document.getElementById('maxDateChange');

  const today = elem.formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = elem.formatDateString(nextWeek);

  elem.setAttribute('value', nextWeek);
  elem.setAttribute('maxDate', nextWeek);

  button.addEventListener('click', () => {
    elem.setAttribute('maxDate', today);
  });
}
