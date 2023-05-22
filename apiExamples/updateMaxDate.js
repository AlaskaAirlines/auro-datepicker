function formatDateString(date) {
  /* eslint-disable prefer-template, no-magic-numbers */
  const dd = String("0" + date.getDate()).slice(-2);
  const mm = String("0" + (date.getMonth() + 1)).slice(-2);
  /* eslint-enable prefer-template, no-magic-numbers */
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
}

export function updateMaxDateExample() {
  const maxDateExample = document.getElementById('maxDateExample');
  const changeMaxDateButton = document.getElementById('maxDateChange');
  const resetButton = document.getElementById('resetMaxDate');

  const today = formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = formatDateString(nextWeek);

  maxDateExample.setAttribute('value', nextWeek);
  maxDateExample.setAttribute('maxDate', nextWeek);

  changeMaxDateButton.addEventListener('click', () => {
    maxDateExample.setAttribute('maxDate', today);
  });

  resetButton.addEventListener('click', () => {
    maxDateExample.setAttribute('value', nextWeek);
    maxDateExample.setAttribute('maxDate', nextWeek);
  });
}
