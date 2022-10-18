export function valueAlert(elem) {
  elem.addEventListener('auroDatePicker-valueSet', () => {
    console.warn('Select value changed to:', elem.value);
    alert(`Select value changed to: ${elem.value}`);
  })
}
