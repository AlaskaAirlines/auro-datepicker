export function alertValueExample() {
  const valueAlertExample = document.querySelector('#datePickerValueAlert');

  valueAlertExample.addEventListener('auroDatePicker-valueSet', () => {
    console.warn('Select value changed to:', valueAlertExample.value);
    alert(`Select value changed to: ${valueAlertExample.value}`);
  })
}
