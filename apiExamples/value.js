setTimeout(() => {
    const valueValidExampleBtnElem = document.querySelector('#validValueExampleBtn');
    const valueInvalidExampleBtnElem = document.querySelector('#invalidValueExampleBtn');
    const valueUndefinedExampleBtnElem = document.querySelector('#undefinedValueExampleBtn');
    const valueExampleElem = document.querySelector('#valueExample');
    const calendar = valueExampleElem.shadowRoot.querySelector('auro-calendar');

    valueExampleElem.minDate = '06/16/2023';
    valueExampleElem.maxDate = '12/25/2030';


    if (valueExampleElem && valueValidExampleBtnElem) {
      valueValidExampleBtnElem.addEventListener('click', () => {
        // console.log("before value change", valueExampleElem.value);
        valueExampleElem.value = '07/29/2029';
        // valueExampleElem.input.value = '07/29/2029';
      })
    }

    if (valueExampleElem && valueInvalidExampleBtnElem) {
      valueInvalidExampleBtnElem.addEventListener('click', () => {
        console.log("invalid click functional");
        valueExampleElem.input.value = '12/29/2037';
      })
    }

    if (valueExampleElem && valueUndefinedExampleBtnElem) {
      valueUndefinedExampleBtnElem.addEventListener('click', () => {
        valueExampleElem.input.value = undefined;
      })
    }
}, 200)
