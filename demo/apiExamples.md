

# auro-datepicker

## Properties

| Property       | Attribute      | Type                | Default     | Description                                      |
|----------------|----------------|---------------------|-------------|--------------------------------------------------|
| [centralDate](#centralDate)  | `centralDate`  | `Object`            |             | The date that determines the currently visible month. |
| [disabled](#disabled)     | `disabled`     | `Boolean`           |             | If set, disables the datepicker.                 |
| [error](#error)        | `error`        | `Boolean`           | false       | Sets a persistent error state (e.g. an error state returned from the server). |
| [maxDate](#maxDate)      | `maxDate`      | `Date`              | "undefined" | Maximum date. All dates after will be disabled.  |
| [minDate](#minDate)      | `minDate`      | `Date`              | "undefined" | Minimum date. All dates before will be disabled. |
| [required](#required)     | `required`     | `Boolean`           |             | Populates the `required` attribute on the input. Used for client-side validation. |
| [selectedDate](#selectedDate) | `selectedDate` | `Date \| undefined` | "undefined" | The selected date.                               |
| [value](#value)        | `value`        | `String`            | "undefined" | Value selected for the date picker.              |

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

Sets a persistent error state (e.g. an error state returned from the server).

<div class="exampleWrapper">
  <auro-datepicker error>
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker error>
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

#### selectedDate

The `selectedDate` is the date which is currently marked as selected.
You usually select a date by clicking on it with the mouse or hitting Enter on the keyboard.

The `selectedDate` might not be within the dates in the current month view.

Can be used to pre-set the value of the datepicker.

<div class="exampleWrapper">
  <auro-datepicker selectedDate="06/16/2022">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker selectedDate="06/16/2022">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>

#### value

Value selected for the datepicker. Can be used to pre-set the value of the datepicker.

<div class="exampleWrapper">
  <auro-datepicker value="03/16/2025">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker value="03/16/2025">
  <span slot="label">Choose a date</span>
</auro-datepicker>
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
setTimeout(processFocusExample, 500);

function processFocusExample() {
  const focusExampleBtnElem = document.querySelector('#focusExampleBtn');
  const focusExampleElem = document.querySelector('#focusExample');

  if (focusExampleElem && focusExampleBtnElem) {
    focusExampleBtnElem.addEventListener('click', () => {
      focusExampleElem.focus();
    })
  }
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
