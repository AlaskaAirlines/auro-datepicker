# auro-datepicker

## Properties

| Property      | Attribute     | Type      | Default     | Description                                      |
|---------------|---------------|-----------|-------------|--------------------------------------------------|
| `centralDate` | `centralDate` | `Object`  |             | The date that determines the currently visible month. |
| `disabled`    | `disabled`    | `Boolean` |             | If set, disables the datepicker.                 |
| `error`       | `error`       | `Boolean` | false       | Sets a persistent error state (e.g. an error state returned from the server). |
| `maxDate`     | `maxDate`     | `Date`    | "undefined" | Maximum date. All dates after will be disabled.  |
| `minDate`     | `minDate`     | `Date`    | "undefined" | Minimum date. All dates before will be disabled. |
| `required`    | `required`    | `Boolean` |             | Populates the `required` attribute on the input. Used for client-side validation. |
| `value`       | `value`       | `String`  | "undefined" | Value selected for the date picker.              |

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
