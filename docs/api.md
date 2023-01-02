# auro-datepicker

## Properties

| Property                        | Attribute                       | Type      | Default     | Description                                      |
|---------------------------------|---------------------------------|-----------|-------------|--------------------------------------------------|
| `centralDate`                   | `centralDate`                   | `Object`  |             | The date that determines the currently visible month. |
| `disabled`                      | `disabled`                      | `Boolean` | false       | If set, disables the datepicker.                 |
| `error`                         | `error`                         | `String`  |             | When defined, sets persistent validity to `customError` and sets `setCustomValidity` = attribute value. |
| `maxDate`                       | `maxDate`                       | `Date`    | "undefined" | Maximum date. All dates after will be disabled.  |
| `minDate`                       | `minDate`                       | `Date`    | "undefined" | Minimum date. All dates before will be disabled. |
| `noValidate`                    | `noValidate`                    | `Boolean` | false       | If set, disables auto-validation on blur.        |
| `required`                      | `required`                      | `Boolean` | false       | Populates the `required` attribute on the input. Used for client-side validation. |
| `setCustomValidity`             | `setCustomValidity`             | `String`  |             | Sets a custom help text message to display for all validityStates. |
| `setCustomValidityValueMissing` | `setCustomValidityValueMissing` | `String`  |             | Help text message to display when validity = `valueMissing`; |
| `validity`                      | `validity`                      | `String`  | "undefined" | Specifies the `validityState` this element is in. |
| `value`                         | `value`                         | `String`  | "undefined" | Value selected for the date picker.              |

## Methods

| Method  | Type       | Description                         |
|---------|------------|-------------------------------------|
| `focus` | `(): void` | Focuses the combobox trigger input. |

## Events

| Event                     | Type               | Description                                      |
|---------------------------|--------------------|--------------------------------------------------|
| `auroDatePicker-ready`    | `CustomEvent<any>` | Notifies that the component has finished initializing. |
| `auroDatePicker-valueSet` | `CustomEvent<any>` | Notifies that the component has a new value set. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
