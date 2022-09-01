function formatDateString(date) {
  /* eslint-disable prefer-template, no-magic-numbers */
  const dd = String("0" + date.getDate()).slice(-2);
  const mm = String("0" + (date.getMonth() + 1)).slice(-2);
  /* eslint-enable prefer-template, no-magic-numbers */
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
}

setTimeout(() => {
  const elem = document.querySelector('#valueExample');

  elem.minDate = new Date();
  elem.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  // Preset the value
  const presetDate = new Date().setDate(new Date().getDate() + 4);
  elem.value = formatDateString(new Date(presetDate));

  // valid date
  document.querySelector('#validValueExampleBtn').addEventListener('click', () => {
    const validDate = new Date().setDate(new Date().getDate() + 60);
    elem.value = formatDateString(new Date(validDate));
  })
}, 200)
