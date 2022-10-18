

# auro-datepicker

## Properties

| Property                        | Attribute                       | Type      | Default     | Description                                      |
|---------------------------------|---------------------------------|-----------|-------------|--------------------------------------------------|
| [centralDate](#centralDate)                   | `centralDate`                   | `Object`  |             | The date that determines the currently visible month. |
| [disabled](#disabled)                      | `disabled`                      | `Boolean` |             | If set, disables the datepicker.                 |
| [error](#error)                         | `error`                         | `String`  |             | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| [maxDate](#maxDate)                       | `maxDate`                       | `Date`    | "undefined" | Maximum date. All dates after will be disabled.  |
| [minDate](#minDate)                       | `minDate`                       | `Date`    | "undefined" | Minimum date. All dates before will be disabled. |
| [required](#required)                      | `required`                      | `Boolean` |             | Populates the `required` attribute on the input. Used for client-side validation. |
| [setCustomValidity](#setCustomValidity)             | `setCustomValidity`             | `String`  |             | Sets a custom help text message to display for all validityStates. |
| [setCustomValidityValueMissing](#setCustomValidityValueMissing) | `setCustomValidityValueMissing` | `String`  |             | Help text message to display when validity = `valueMissing`; |
| [validity](#validity)                      | `validity`                      | `String`  | "undefined" | Specifies the `validityState` this element is in. |
| [value](#value)                         | `value`                         | `String`  | "undefined" | Value selected for the date picker.              |

## Methods

| Method  | Type       | Description                         |
|---------|------------|-------------------------------------|
| [focus](#focus) | `(): void` | Focuses the combobox trigger input. |

## Events

| Event                     | Type               | Description                                      |
|---------------------------|--------------------|--------------------------------------------------|
| `auroDatePicker-ready`    | `CustomEvent<any>` | Notifies that the component has finished initializing. |
| `auroDatePicker-valueSet` | `CustomEvent<any>` | Notifies that the component has a new value set. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
| [helpText](#helpText) | Defines the content of the helpText. |
| [label](#label)    | Defines the content of the label.    |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-datepicker>
        <span slot="label">Choose a date</span>
      </auro-datepicker>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Choose a date</span>
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

<div class="exampleWrapper">
  <auro-datepicker error="There is a problem.">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker error="There is a problem.">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### maxDate

To give a higher limit you can bind a date to the `maxDate` property.

<div class="exampleWrapper">
  <auro-datepicker maxDate="06/16/1980">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker maxDate="06/16/1980">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### minDate

To give a lower limit you can bind a date to the `minDate` property.

<div class="exampleWrapper">
  <auro-datepicker minDate="06/16/2030">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="06/16/2030">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### required

Populates the `required` attribute on the input. Used for client-side validation.

<div class="exampleWrapper">
  <auro-datepicker required>
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker required>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### value

Value selected for the datepicker. Can be used to pre-set the value of the datepicker.

<div class="exampleWrapper">
  <auro-datepicker id="valueExample">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <auro-button id="validValueExampleBtn">Set To Valid Date</auro-button>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker id="valueExample">
  <span slot="label">Choose a date</span>
</auro-datepicker>
<auro-button id="validValueExampleBtn">Set To Valid Date</auro-button>
```

```js
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
    elem.value = formatDateString(new Date(validDate));
  })
}
```

</auro-accordion>

### Method Examples

#### focus

The focus method will apply focus state to the datepicker input field.

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

### Slot Examples

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
<div class="exampleWrapper">
  <auro-datepicker error value="01/01/2030">
    <span slot="label">Choose a date</span>
    <span slot="helpText">Choose a date must be today or earlier.</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker error value="01/01/2030">
  <span slot="label">Choose a date</span>
  <span slot="helpText">Choose a date must be today or earlier.</span>
</auro-datepicker>
```

</auro-accordion>

#### label

Sets the label used in the trigger. All datepickers should include a definition for the label slot.

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

## Functional Examples

### Watch for value changes

The following example listens for the `auroDatePicker-valueSet` event. Once triggered, `element.value` may be queried for the new value **and** in successful scenarios, an alert will appear. Open the JavaScript console in the browser's developer tools to see the `console.warn` message that appears after the `auroDatePicker-valueSet` event has been triggered.

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
