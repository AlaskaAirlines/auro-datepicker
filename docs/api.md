# auro-datepicker

## Properties

| Property                | Attribute               | Type      | Default          | Description                                      |
|-------------------------|-------------------------|-----------|------------------|--------------------------------------------------|
| `centralDate`           | `centralDate`           |           |                  |                                                  |
| `disableDates`          | `disableDates`          | `string`  | "undefined"      |                                                  |
| `disabled`              | `disabled`              | `Boolean` |                  | If set, disables the datepicker.                 |
| `error`                 | `error`                 | `Boolean` |                  | Sets a persistent error state (e.g. an error state returned from the server). |
| `firstDayOfWeek`        | `firstDayOfWeek`        | `number`  | 0                |                                                  |
| `locale`                | `locale`                | `string`  | "undefined"      |                                                  |
| `maxDate`               | `maxDate`               |           | "undefined"      |                                                  |
| `minDate`               | `minDate`               |           | "undefined"      |                                                  |
| `optionSelected`        | `optionSelected`        | `Object`  |                  | Specifies the current selected option.           |
| `required`              | `required`              | `Boolean` |                  | Populates the `required` attribute on the input. Used for client-side validation. |
| `selectedDate`          | `selectedDate`          |           | "undefined"      |                                                  |
| `triggerIcon`           | `triggerIcon`           | `Boolean` |                  | If set, the `icon` attribute will be applied to the trigger `auro-input` element. |
| `type`                  | `type`                  | `String`  | "month-day-year" | Applies the defined value as the type attribute on auro-input. |
| `value`                 | `value`                 | `String`  | null             | Value selected for the date picker.              |
| `weekdayHeaderNotation` | `weekdayHeaderNotation` | `string`  | "narrow"         |                                                  |

## Events

| Event                  | Type               | Description                                      |
|------------------------|--------------------|--------------------------------------------------|
| `auroDatePicker-ready` | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
| `helpText` | Defines the content of the helpText. |
| `label`    | Defines the content of the label.    |
