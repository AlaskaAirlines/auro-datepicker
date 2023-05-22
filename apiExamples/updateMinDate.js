function formatDateString(date) {
  /* eslint-disable prefer-template, no-magic-numbers */
  const dd = String("0" + date.getDate()).slice(-2);
  const mm = String("0" + (date.getMonth() + 1)).slice(-2);
  /* eslint-enable prefer-template, no-magic-numbers */
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
}

export function updateMinDateExample() {
  const minDateExample = document.getElementById('minDateExample');
  const changeMinDateButton = document.getElementById('minDateChange');
  const resetButton = document.getElementById('resetMinDate');

  const today = formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = formatDateString(nextWeek);

  minDateExample.setAttribute('value', today);
  minDateExample.setAttribute('minDate', today);

  changeMinDateButton.addEventListener('click', () => {
    minDateExample.setAttribute('minDate', nextWeek);
  });

  resetButton.addEventListener('click', () => {
    minDateExample.setAttribute('value', today);
    minDateExample.setAttribute('minDate', today);
  });

}

