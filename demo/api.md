

# auro-datepicker

## Properties

| Property                          | Attribute                         | Type      | Default                                          | Description                                      |
|-----------------------------------|-----------------------------------|-----------|--------------------------------------------------|--------------------------------------------------|
| [centralDate](#centralDate)                     | `centralDate`                     | `String`  |                                                  | The date that determines the currently visible month. |
| [disabled](#disabled)                        | `disabled`                        | `Boolean` | false                                            | If set, disables the datepicker.                 |
| [error](#error)                           | `error`                           | `String`  |                                                  | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| [maxDate](#maxDate)                         | `maxDate`                         | `String`  |                                                  | Maximum date. All dates after will be disabled.  |
| [minDate](#minDate)                         | `minDate`                         | `String`  |                                                  | Minimum date. All dates before will be disabled. |
| [monthNames](#monthNames)                      | `monthNames`                      | `array`   | ["January","February","March","April","May","June","July","August","September","October","November","December"] |                                                  |
| [noValidate](#noValidate)                      | `noValidate`                      | `Boolean` | false                                            | If set, disables auto-validation on blur.        |
| [range](#range)                           | `range`                           | `Boolean` | false                                            | If set, turns on date range functionality in auro-calendar. |
| [required](#required)                        | `required`                        | `Boolean` | false                                            | Populates the `required` attribute on the input. Used for client-side validation. |
| [setCustomValidity](#setCustomValidity)               | `setCustomValidity`               | `String`  |                                                  | Sets a custom help text message to display for all validityStates. |
| [setCustomValidityRangeOverflow](#setCustomValidityRangeOverflow)  | `setCustomValidityRangeOverflow`  | `String`  |                                                  | Custom help text message to display when validity = `rangeOverflow`. |
| [setCustomValidityRangeUnderflow](#setCustomValidityRangeUnderflow) | `setCustomValidityRangeUnderflow` | `String`  |                                                  | Custom help text message to display when validity = `rangeUnderflow`. |
| [setCustomValidityValueMissing](#setCustomValidityValueMissing)   | `setCustomValidityValueMissing`   | `String`  |                                                  | Help text message to display when validity = `valueMissing`; |
| [validity](#validity)                        | `validity`                        | `String`  | "undefined"                                      | Specifies the `validityState` this element is in. |
| [value](#value)                           | `value`                           | `String`  | "undefined"                                      | Value selected for the date picker.              |
| [valueEnd](#valueEnd)                        | `valueEnd`                        | `String`  | "undefined"                                      | Value selected for the second date picker when using date range. |

## Methods

| Method     | Type       | Description                                   |
|------------|------------|-----------------------------------------------|
| [focus](#focus)    | `(): void` | Focuses the combobox trigger input.           |
| [validate](#validate) | `(): void` | Determines the validity state of the element. |

## Events

| Event                      | Type                              | Description                                      |
|----------------------------|-----------------------------------|--------------------------------------------------|
| `auroDatePicker-ready`     | `CustomEvent<any>`                | Notifies that the component has finished initializing. |
| `auroDatePicker-valueSet`  |                                   | Notifies that the component has a new value set. |
| `auroDatepicker-validated` | `CustomEvent<{ validity: any; }>` | Notifies that the component value(s) have been validated. |

## Slots

| Name              | Description                                      |
|-------------------|--------------------------------------------------|
| [fromLabel](#fromLabel)       | Defines the label content for the first input.   |
| [helpText](#helpText)        | Defines the content of the helpText.             |
| [mobileDateLabel](#mobileDateLabel) | Defines the content to display above selected dates in the mobile layout. |
| [toLabel](#toLabel)         | Defines the label content for the second input when the `range` attribute is used. |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-datepicker>
        <span slot="fromLabel">Choose a date</span>
        <span slot="mobileDateLabel">Choose a date</span>
      </auro-datepicker>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

### Property Examples

#### centralDate

Date that determines the currently visible month.

<div class="exampleWrapper">
  <auro-datepicker centralDate="06/16/1980">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker centralDate="06/16/1980">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### disabled

If set, disables the datepicker.

<div class="exampleWrapper">
  <auro-datepicker disabled>
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker disabled>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### error

Sets a persistent error state (e.g. an error state returned from the server). This error state will override all default validation until the error attribute is removed from the datepicker.

<h1 style="color:red;">FIX EXAMPLE</h1>
<div class="exampleWrapper">
  <auro-button id="undefinedValueExampleBtnAddError">Set Error</auro-button>
  <auro-button id="undefinedValueExampleBtnRemoveError">Remove Error</auro-button>
  <br/><br/>
  <auro-datepicker error="Custom error message" id="errorExample">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-button id="undefinedValueExampleBtnAddError">Set Error</auro-button>
<auro-button id="undefinedValueExampleBtnRemoveError">Remove Error</auro-button>
<br/><br/>
<auro-datepicker error="Custom error message" id="errorExample">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### maxDate

To give a higher limit you can bind a date to the `maxDate` property. It is recommended to use the `setCustomValidityRangeOverflow` attribute to define an error message to display when validation fails the maximum date restriction.

<div class="exampleWrapper">
  <auro-datepicker maxDate="03/25/2023" setCustomValidityRangeOverflow="Selected date is later than maximum date.">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker maxDate="03/25/2023" setCustomValidityRangeOverflow="Selected date is later than maximum date.">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>
Setting the `maxDate` attribute to a date earlier than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is later than the new `maxDate`, the calendar view will move to the new `maxDate` month.

This example demonstrates that behavior.

<h1 style="color:red;">FIX EXAMPLE</h1>
<div class="exampleWrapper">
  <auro-datepicker id="maxDateExample">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <auro-button id="maxDateChange">Change maxDate to Today's Date</auro-button>
  <auro-button id="resetMaxDate">Reset Datepicker to Initial Example</auro-button>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
export function pastMaxDate(elem) {
  const changeMaxDateButton = document.getElementById('maxDateChange');
  const resetButton = document.getElementById('resetMaxDate');

  const today = elem.formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = elem.formatDateString(nextWeek);

  elem.setAttribute('value', nextWeek);
  elem.setAttribute('maxDate', nextWeek);

  changeMaxDateButton.addEventListener('click', () => {
    elem.setAttribute('maxDate', today);
  });

  resetButton.addEventListener('click', () => {
    elem.setAttribute('value', nextWeek);
    elem.setAttribute('maxDate', nextWeek);
  });
}
```

```html
<auro-datepicker id="maxDateExample">
  <span slot="label">Choose a date</span>
</auro-datepicker>
<auro-button id="maxDateChange">Change maxDate to Today's Date</auro-button>
<auro-button id="resetMaxDate">Reset Datepicker to Initial Example</auro-button>
```

</auro-accordion>

#### minDate

To give a lower limit you can bind a date to the `minDate` property. It is recommended to use the `setCustomValidityRangeUnderflow` attribute to define an error message to display when validation fails the minimum date restriction.

<div class="exampleWrapper">
  <auro-datepicker minDate="03/25/2028" setCustomValidityRangeUnderflow="Selected date is earlier than the minimum date.">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="03/25/2028" setCustomValidityRangeUnderflow="Selected date is earlier than the minimum date.">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>
Setting the `minDate` attribute to a date later than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is earlier than the new `minDate`, the calendar view will move to the new `minDate` month.

This example demonstrates that behavior.

<h1 style="color:red;">FIX EXAMPLE</h1>
<div class="exampleWrapper">
  <auro-datepicker id="minDateExample">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <auro-button id="minDateChange">Change minDate to a week from Today</auro-button>
  <auro-button id="resetMinDate">Reset Datepicker to Initial Example</auro-button>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
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
```

```html
<auro-datepicker id="minDateExample">
  <span slot="label">Choose a date</span>
</auro-datepicker>
<auro-button id="minDateChange">Change minDate to a week from Today</auro-button>
<auro-button id="resetMinDate">Reset Datepicker to Initial Example</auro-button>
```

</auro-accordion>

#### monthNames

May be used to provide localized month names. These names will only be shown in the calendar when viewed on a mobile device.

<div class="exampleWrapper">
  <auro-datepicker id="monthNamesExample">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
const monthNamesExample = document.querySelector('#monthNamesExample');
const spanishMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

monthNamesExample.monthNames = spanishMonths;
```

```html
<auro-datepicker id="monthNamesExample">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### noValidate

When set, the datepicker will not validate when navigating away from the component.

<div class="exampleWrapper">
  <auro-datepicker required noValidate>
    <span slot="fromLabel">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker required noValidate>
  <span slot="fromLabel">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### range

When used, the datepicker will display two inputs and the component will support selection of dates for a start and end date.

<div class="exampleWrapper">
  <auro-datepicker range>
    <span slot="fromLabel">Departure</span>
    <span slot="toLabel">Return</span>
    <span slot="mobileDateLabel">Roundtrip</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker range>
  <span slot="fromLabel">Departure</span>
  <span slot="toLabel">Return</span>
  <span slot="mobileDateLabel">Roundtrip</span>
</auro-datepicker>
```

</auro-accordion>

#### required

Populates the `required` attribute on the input. Used for client-side validation.

<div class="exampleWrapper">
  <auro-datepicker required>
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker required>
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### validity

Specifies the `validityState` the element is in. Upon first interaction, or presetting the `error` attribute, the component will validate on `focusout`. After validation, `validityState` can be queried from the component by using the following JavaScript.

<h1 style="color:red;">INSERT EXAMPLE</h1>

#### value

Value selected for the datepicker. Can be used to pre-set the value of the datepicker. When the `range` attribute is used, `value` is for the first input.

<div class="exampleWrapper">
  <auro-datepicker id="valueExample" value="02/02/2022">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker id="valueExample" value="02/02/2022">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### valueEnd

Only applies to a datepicker with the `range` attribute. Value of the secod inpot, end date, selected for the datepicker. Can be used to pre-set the value of the datepicker.

<h1 style="color:red;">INSERT EXAMPLE</h1>

### Method Examples

#### focus

The focus method will apply focus state to the datepicker's input field.

<h1 style="color:red;">FIX EXAMPLE</h1>
<div class="exampleWrapper">
  <auro-button id="focusExampleBtn">Apply focus to combobox</auro-button>
  <br /><br />
  <auro-datepicker id="focusExample">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
export function focusExample(elem) {
  document.querySelector('#focusExampleBtn').addEventListener('click', () => {
    elem.focus();
  })
}
```

```html
<auro-button id="focusExampleBtn">Apply focus to combobox</auro-button>
<br /><br />
<auro-datepicker id="focusExample">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### validate

The validate method will cause the component to re-validate the current value(s) of the datepicker.

<h1 style="color:red;">INSERT EXAMPLE</h1>

### Slot Examples

#### fromLabel

Sets the label used for the input. When the `range` attribute is used this is the first of two inputs.

<h1 style="color:red;">INSERT EXAMPLE</h1>

#### helpText

Sets the help text displayed below the trigger. The `helpText` slot can be used to provide additional context for the combobox. When using the `error` property, the `helpText` slot can be used to describe the error.

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Choose a date</span>
    <span slot="helpText">Choose a date must be today or earlier.</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Choose a date</span>
  <span slot="helpText">Choose a date must be today or earlier.</span>
</auro-datepicker>
```

</auro-accordion>

#### mobileDateLabel

Sets the label used for the selected date display at the top of the bib when viewed in the mobile layout. To view this demo, set your window to a mobile screen size.

<h1 style="color:red;">INSERT EXAMPLE</h1>

#### toLabel

Only for use with the `range` attribute. Sets the label for the second input.

<h1 style="color:red;">INSERT EXAMPLE</h1>

## Functional Examples

### Watch for value changes

The following example listens for the `auroDatePicker-valueSet` event. Once triggered, `element.value` may be queried for the new value **and** in successful scenarios, an alert will appear. Open the JavaScript console in the browser's developer tools to see the `console.warn` message that appears after the `auroDatePicker-valueSet` event has been triggered.

<h1 style="color:red;">FIX EXAMPLE</h1>
<div class="exampleWrapper">
  <auro-datepicker id="datePickerValueAlert">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```js
export function valueAlert(elem) {
  elem.addEventListener('auroDatePicker-valueSet', () => {
    console.warn('Select value changed to:', elem.value);
    alert(`Select value changed to: ${elem.value}`);
  })
}
```

```html
<auro-datepicker id="datePickerValueAlert">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>
