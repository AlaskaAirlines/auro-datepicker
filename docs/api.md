# auro-datepicker

## Properties

| Property       | Attribute      | Type                | Default          | Description                                      |
|----------------|----------------|---------------------|------------------|--------------------------------------------------|
| `centralDate`  | `centralDate`  | `Object`            |                  | The date that determines the currently visible month. |
| `disabled`     | `disabled`     | `Boolean`           |                  | If set, disables the datepicker.                 |
| `error`        | `error`        | `Boolean`           | false            | Sets a persistent error state (e.g. an error state returned from the server). |
| `maxDate`      | `maxDate`      | `Date`              | "undefined"      | Maximum date. All dates after will be disabled.  |
| `minDate`      | `minDate`      | `Date`              | "undefined"      | Minimum date. All dates before will be disabled. |
| `required`     | `required`     | `Boolean`           |                  | Populates the `required` attribute on the input. Used for client-side validation. |
| `selectedDate` | `selectedDate` | `Date \| undefined` | "undefined"      | The selected date.                               |
| `type`         | `type`         | `string`            | "month-day-year" |                                                  |
| `value`        | `value`        | `String`            | "undefined"      | Value selected for the date picker.              |

## Events

| Event                  | Type               | Description                                      |
|------------------------|--------------------|--------------------------------------------------|
| `auroDatePicker-ready` | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
