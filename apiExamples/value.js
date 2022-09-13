export function valueExample(elem) {
  function formatDateString(date) {
    /* eslint-disable prefer-template, no-magic-numbers */
    const dd = String("0" + date.getDate()).slice(-2);
    const mm = String("0" + (date.getMonth() + 1)).slice(-2);
    /* eslint-enable prefer-template, no-magic-numbers */
    const yyyy = date.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  }

  elem.minDate = new Date();
  elem.maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  // Preset the value
  const presetDate = new Date().setDate(new Date().getDate() + 4);
  elem.value = formatDateString(new Date(presetDate));

  // valid date
  document.querySelector('#validValueExampleBtn').addEventListener('click', () => {
    const validDate = new Date().setDate(new Date().getDate() + 60);
    console.warn('set valid date', validDate);
    elem.value = formatDateString(new Date(validDate));
  })
}
