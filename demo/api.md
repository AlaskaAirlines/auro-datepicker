<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-datepicker

## Properties

| Property                          | Attribute                         | Type      | Default                                          | Description                                      |
|-----------------------------------|-----------------------------------|-----------|--------------------------------------------------|--------------------------------------------------|
| [calendarEndDate](#calendarEndDate)                 | `calendarEndDate`                 | `String`  | "undefined"                                      | The last date that may be displayed in the calendar |
| [calendarFocusDate](#calendarFocusDate)               | `calendarFocusDate`               | `String`  | "value"                                          | The date that will first be visually rendered to the user in the calendar. |
| [calendarStartDate](#calendarStartDate)               | `calendarStartDate`               | `String`  | "undefined"                                      | The first date that may be displayed in the calendar. |
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
| [setCustomValidityValueMissing](#setCustomValidityValueMissing)   | `setCustomValidityValueMissing`   | `String`  |                                                  | Help text message to display when validity = `valueMissing`. |
| [validity](#validity)                        | `validity`                        | `String`  | "undefined"                                      | Specifies the `validityState` this element is in. |
| [value](#value)                           | `value`                           | `String`  | "undefined"                                      | Value selected for the date picker.              |
| [valueEnd](#valueEnd)                        | `valueEnd`                        | `String`  | "undefined"                                      | Value selected for the second date picker when using date range. |

## Methods

| Method            | Type                         | Description                                      |
|-------------------|------------------------------|--------------------------------------------------|
| [focus](#focus)           | `(focusInput: string): void` | Focuses the datepicker trigger input.<br /><br />**focusInput**: Pass in `endDate` to focus on the return input. No parameter is needed to focus on the depart input. |
| [pushSlotContent](#pushSlotContent) | `(): void`                   | Emits an event to notify the calendar cells to fetch their slot content. |

## Events

| Event                           | Type                                             | Description                                      |
|---------------------------------|--------------------------------------------------|--------------------------------------------------|
| `auroDatePicker-monthChanged`   | `CustomEvent<{ month: any; year: any; numCalendars: any; }>` | Notifies that the visible calendar month(s) have changed. |
| `auroDatePicker-newSlotContent` | `CustomEvent<any>`                               | Notifies that new slot content has been added to the datepicker. |
| `auroDatePicker-ready`          | `CustomEvent<any>`                               | Notifies that the component has finished initializing. |
| `auroDatePicker-toggled`        | `CustomEvent<{ expanded: any; }>`                | Notifies that the calendar dropdown has been opened/closed. |
| `auroDatePicker-valueSet`       |                                                  | Notifies that the component has a new value set. |
| `auroFormElement-validated`     |                                                  | Notifies that the component value(s) have been validated. |

## Slots

| Name                 | Description                                      |
|----------------------|--------------------------------------------------|
| `date_MM_DD_YYYY`    | Defines the content to display in the auro-calendar-cell for the specified date. The content text is colored using the success state token when the `highlight` attribute is applied to the slot. |
| [fromLabel](#fromLabel)          | Defines the label content for the first input.   |
| [helpText](#helpText)           | Defines the content of the helpText.             |
| [mobileDateLabel](#mobileDateLabel)    | Defines the content to display above selected dates in the mobile layout. |
| `popover_MM_DD_YYYY` | Defines the content to display in the auro-calendar-cell popover for the specified date. |
| [toLabel](#toLabel)            | Defines the label content for the second input when the `range` attribute is used. |

## CSS Shadow Parts

| Part              | Description                                      |
|-------------------|--------------------------------------------------|
| [calendar](#calendar)        | Use for customizing the style of the calendar.   |
| [calendarWrapper](#calendarWrapper) | Use for customizing the style of the calendar container. |
| [dropdown](#dropdown)        | Use for customizing the style of the dropdown.   |
| [helpText](#helpText)        | Use for customizing the style of the datepicker help text. |
| [helpTextSpan](#helpTextSpan)    | Use for customizing the style of the datepicker help text span. |
| [input](#input)           | Use for customizing the style of the datepicker inputs. |
| [trigger](#trigger)         | Use for customizing the style of the datepicker trigger. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-datepicker>
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-datepicker>
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### calendarStartDate & calendarEndDate

The `calendarStartDate` and `calendarEndDate` properties may be used to explicitly control which calendar months _may_ be rendered in the calendar.

In <strong>desktop</strong>, the calendar month navigation will be restricted by these dates. In <strong>mobile</strong>, the following logic is used:

- if both `calendarStartDate` and `calendarEndDate` are defined: all months between, including these dates, will be rendered.
- If only `calendarStartDate` is defined: 12 months will be rendered starting with this value.
- if only `calendarEndDate` is defined: The current date month through the value of this property will be rendered.

Note: This does not restrict setting a value outside of those date constraints. These properties _only_ define which months can be rendered in the calendar. A user may still type any date into the input field. If actual value selection restrictions are needed, see the `minDate` and `maxDate` properties which may be used standalone, or in conjunction with `calendarStartDate` and `calendarEndDate`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/calendarStartAndEndDate.html) -->
  <!-- The below content is automatically added from ./../apiExamples/calendarStartAndEndDate.html -->
  <auro-datepicker calendarStartDate="01/01/2022" calendarEndDate="06/01/2022">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/calendarStartAndEndDate.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/calendarStartAndEndDate.html -->

```html
<auro-datepicker calendarStartDate="01/01/2022" calendarEndDate="06/01/2022">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### calendarFocusDate

The `calendarFocusDate` controls which calendar month is first presented to the user when they open the dropdown bib.

In <strong>desktop</strong> layout, the first month actually rendered will be the `calendarFocusDate` if defined. Once the user manually navigates the calendar to a different month, the calendar view will remain where the user left off when they close and reopen the bib. If the `calendarFocusDate` property is changed, this will re-render the calendar starting at the new date. If `calendarFocusDate` is undefined, the first rendered month will be the current date or the first renderable date defined by `calendarStartDate`.

In <strong>mobile</strong> layout, upon first opening the bib, the vertical list of months will scroll (with no animation) to the month defined by the `calendarFocusDate`. If the user scrolls the list to a different position, the scroll position will remain where the user left off when they close and reopen the bib. If the `calendarFocusDate` is changed, the list will scroll to the new dates month. If `calendarFocusDate` is undefined, the list will start at the top most scroll position.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/calendarFocusDate.html) -->
  <!-- The below content is automatically added from ./../apiExamples/calendarFocusDate.html -->
  <auro-datepicker calendarStartDate="01/01/2022" calendarEndDate="12/01/2023" calendarFocusDate="11/01/2022">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/calendarFocusDate.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/calendarFocusDate.html -->

```html
<auro-datepicker calendarStartDate="01/01/2022" calendarEndDate="12/01/2023" calendarFocusDate="11/01/2022">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### disabled

If set, disables the datepicker.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ./../apiExamples/disabled.html -->
  <auro-datepicker disabled>
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->

```html
<auro-datepicker disabled>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### error

Sets a persistent error state (e.g. an error state returned from the server). This error state will override all default validation until the error attribute is removed from the datepicker.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error.html) -->
  <!-- The below content is automatically added from ./../apiExamples/error.html -->
  <auro-datepicker error="Custom error message" id="errorExample">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <br/><br/>
  <auro-button id="undefinedValueExampleBtnAddError">Set Error</auro-button>
  <auro-button id="undefinedValueExampleBtnRemoveError">Remove Error</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/error.html -->

```html
<auro-datepicker error="Custom error message" id="errorExample">
  <span slot="label">Choose a date</span>
</auro-datepicker>
<br/><br/>
<auro-button id="undefinedValueExampleBtnAddError">Set Error</auro-button>
<auro-button id="undefinedValueExampleBtnRemoveError">Remove Error</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### maxDate

To give a higher limit you can bind a date to the `maxDate` property. It is recommended to use the `setCustomValidityRangeOverflow` attribute to define an error message to display when validation fails the maximum date restriction.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/maxDate.html) -->
  <!-- The below content is automatically added from ./../apiExamples/maxDate.html -->
  <auro-datepicker maxDate="03/25/2023" setCustomValidityRangeOverflow="Selected date is later than maximum date.">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/maxDate.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/maxDate.html -->

```html
<auro-datepicker maxDate="03/25/2023" setCustomValidityRangeOverflow="Selected date is later than maximum date.">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Setting the `maxDate` attribute to a date earlier than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is later than the new `maxDate`, the calendar view will move to the new `maxDate` month.

This example demonstrates that behavior.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/updateMaxDate.html) -->
  <!-- The below content is automatically added from ./../apiExamples/updateMaxDate.html -->
  <auro-datepicker id="maxDateExample" setCustomValidityRangeOverflow="Selected date is later than maximum date.">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <auro-button id="maxDateChange">Change maxDate to Today's Date</auro-button>
  <auro-button id="resetMaxDate">Reset Datepicker to Initial Example</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMaxDate.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/updateMaxDate.html -->

```html
<auro-datepicker id="maxDateExample" setCustomValidityRangeOverflow="Selected date is later than maximum date.">
  <span slot="label">Choose a date</span>
</auro-datepicker>
<auro-button id="maxDateChange">Change maxDate to Today's Date</auro-button>
<auro-button id="resetMaxDate">Reset Datepicker to Initial Example</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMaxDate.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/updateMaxDate.js -->

```js
function formatDateString(date) {
  /* eslint-disable prefer-template, no-magic-numbers */
  const dd = String("0" + date.getDate()).slice(-2);
  const mm = String("0" + (date.getMonth() + 1)).slice(-2);
  /* eslint-enable prefer-template, no-magic-numbers */
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
}

export function updateMaxDateExample() {
  const maxDateExample = document.getElementById('maxDateExample');
  const changeMaxDateButton = document.getElementById('maxDateChange');
  const resetButton = document.getElementById('resetMaxDate');

  const today = formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = formatDateString(nextWeek);

  maxDateExample.setAttribute('value', nextWeek);
  maxDateExample.setAttribute('maxDate', nextWeek);

  changeMaxDateButton.addEventListener('click', () => {
    maxDateExample.setAttribute('maxDate', today);
  });

  resetButton.addEventListener('click', () => {
    maxDateExample.setAttribute('value', nextWeek);
    maxDateExample.setAttribute('maxDate', nextWeek);
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### minDate

To give a lower limit you can bind a date to the `minDate` property. It is recommended to use the `setCustomValidityRangeUnderflow` attribute to define an error message to display when validation fails the minimum date restriction.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/minDate.html) -->
  <!-- The below content is automatically added from ./../apiExamples/minDate.html -->
  <auro-datepicker minDate="03/25/2028" setCustomValidityRangeUnderflow="Selected date is earlier than the minimum date.">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/minDate.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/minDate.html -->

```html
<auro-datepicker minDate="03/25/2028" setCustomValidityRangeUnderflow="Selected date is earlier than the minimum date.">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Setting the `minDate` attribute to a date later than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is earlier than the new `minDate`, the calendar view will move to the new `minDate` month.

This example demonstrates that behavior.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/updateMinDate.html) -->
  <!-- The below content is automatically added from ./../apiExamples/updateMinDate.html -->
  <auro-datepicker id="minDateExample" setCustomValidityRangeUnderflow="Selected date is earlier than the minimum date.">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <auro-button id="minDateChange">Change minDate to a week from Today</auro-button>
  <auro-button id="resetMinDate">Reset Datepicker to Initial Example</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMinDate.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/updateMinDate.html -->

```html
<auro-datepicker id="minDateExample" setCustomValidityRangeUnderflow="Selected date is earlier than the minimum date.">
  <span slot="label">Choose a date</span>
</auro-datepicker>
<auro-button id="minDateChange">Change minDate to a week from Today</auro-button>
<auro-button id="resetMinDate">Reset Datepicker to Initial Example</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMinDate.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/updateMinDate.js -->

```js
function formatDateString(date) {
  /* eslint-disable prefer-template, no-magic-numbers */
  const dd = String("0" + date.getDate()).slice(-2);
  const mm = String("0" + (date.getMonth() + 1)).slice(-2);
  /* eslint-enable prefer-template, no-magic-numbers */
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
}

export function updateMinDateExample() {
  const minDateExample = document.getElementById('minDateExample');
  const changeMinDateButton = document.getElementById('minDateChange');
  const resetButton = document.getElementById('resetMinDate');

  const today = formatDateString(new Date());

  let nextWeek = new Date();
  let addOneWeek = nextWeek.getDate() + 7;

  nextWeek.setDate(addOneWeek);
  nextWeek = formatDateString(nextWeek);

  minDateExample.setAttribute('value', today);
  minDateExample.setAttribute('minDate', today);

  changeMinDateButton.addEventListener('click', () => {
    minDateExample.setAttribute('minDate', nextWeek);
  });

  resetButton.addEventListener('click', () => {
    minDateExample.setAttribute('value', today);
    minDateExample.setAttribute('minDate', today);
  });

}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### monthNames

May be used to provide localized month names. These names will only be shown in the calendar when viewed on a mobile device.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/monthNames.html) -->
  <!-- The below content is automatically added from ./../apiExamples/monthNames.html -->
  <auro-datepicker id="monthNamesExample">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/monthNames.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/monthNames.html -->

```html
<auro-datepicker id="monthNamesExample">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/monthNames.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/monthNames.js -->

```js
export function monthNamesExample() {
  const monthNamesExample = document.querySelector('#monthNamesExample');
  const spanishMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  monthNamesExample.monthNames = spanishMonths;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### noValidate

When set, the datepicker will not validate when navigating away from the component.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/noValidate.html) -->
  <!-- The below content is automatically added from ./../apiExamples/noValidate.html -->
  <auro-datepicker required noValidate>
    <span slot="fromLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/noValidate.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/noValidate.html -->

```html
<auro-datepicker required noValidate>
  <span slot="fromLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### range

When used, the datepicker will display two inputs and the component will support selection of dates for a start and end date.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicRange.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basicRange.html -->
  <auro-datepicker range>
    <span slot="fromLabel">Departure</span>
    <span slot="toLabel">Return</span>
    <span slot="mobileDateLabel">Roundtrip</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicRange.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicRange.html -->

```html
<auro-datepicker range>
  <span slot="fromLabel">Departure</span>
  <span slot="toLabel">Return</span>
  <span slot="mobileDateLabel">Roundtrip</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### required

Populates the `required` attribute on the input. Used for client-side validation.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/required.html) -->
  <!-- The below content is automatically added from ./../apiExamples/required.html -->
  <auro-datepicker required setCustomValidityValueMissing="Custom value missing message.">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <auro-datepicker required range setCustomValidityValueMissing="Custom value missing message.">
    <span slot="fromLabel">Departure</span>
    <span slot="toLabel">Return</span>
    <span slot="mobileDateLabel">Roundtrip</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/required.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/required.html -->

```html
<auro-datepicker required setCustomValidityValueMissing="Custom value missing message.">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
<auro-datepicker required range setCustomValidityValueMissing="Custom value missing message.">
  <span slot="fromLabel">Departure</span>
  <span slot="toLabel">Return</span>
  <span slot="mobileDateLabel">Roundtrip</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### validity

Specifies the `validityState` the element is in. Upon first interaction, or presetting the `error` attribute, the component will validate on `focusout`. After validation, `validityState` can be queried from the component by using the following JavaScript.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/validity.html) -->
  <!-- The below content is automatically added from ./../apiExamples/validity.html -->
  <auro-datepicker required id="validityExample">
    <span slot="fromLabel">Choose a date</span>
  </auro-datepicker>
  <auro-button id="validityExampleBtn">Get validity</auro-button>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/validity.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/validity.html -->

```html
<auro-datepicker required id="validityExample">
  <span slot="fromLabel">Choose a date</span>
</auro-datepicker>
<auro-button id="validityExampleBtn">Get validity</auro-button>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/validity.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/validity.js -->

```js
export function validityExample() {
  const validityExampleExample = document.querySelector('#validityExample');
  const validityExampleExampleBtn = document.querySelector('#validityExampleBtn');

  validityExampleExampleBtn.addEventListener('click', () => {
    console.warn('Validity set to:', validityExampleExample.validity);
    alert(`Validity set to: ${validityExampleExample.validity}`);
  })
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### value

Value selected for the datepicker. Can be used to pre-set the value of the datepicker. When the `range` attribute is used, `value` is for the first input.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/value.html) -->
  <!-- The below content is automatically added from ./../apiExamples/value.html -->
  <auro-datepicker id="valueExample" value="02/02/2022">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/value.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/value.html -->

```html
<auro-datepicker id="valueExample" value="02/02/2022">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### valueEnd

Value of the second input (end date), selected for the datepicker. Can be used to pre-set the value of the datepicker. Only applicable for a datepicker with the `range` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/valueEnd.html) -->
  <!-- The below content is automatically added from ./../apiExamples/valueEnd.html -->
  <auro-datepicker id="valueEndExample" range valueEnd="03/03/2023">
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/valueEnd.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/valueEnd.html -->

```html
<auro-datepicker id="valueEndExample" range valueEnd="03/03/2023">
  <span slot="label">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Method Examples

#### focus

The focus method will apply focus state to the datepicker's input field.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/focus.html) -->
  <!-- The below content is automatically added from ./../apiExamples/focus.html -->
  <auro-button id="focusExampleBtn">Apply focus to datepicker</auro-button>
  <auro-button id="focusExampleBtnTwo">Apply focus to the second input in datepicker</auro-button>
  <br /><br />
  <auro-datepicker id="focusExampleElem" range>
    <span slot="label">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/focus.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/focus.html -->

```html
<auro-button id="focusExampleBtn">Apply focus to datepicker</auro-button>
<auro-button id="focusExampleBtnTwo">Apply focus to the second input in datepicker</auro-button>
<br /><br />
<auro-datepicker id="focusExampleElem" range>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/focus.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/focus.js -->

```js
export function focusExample() {
  const focusExampleElem = document.querySelector('#focusExampleElem');
  const focusExampleBtn = document.querySelector('#focusExampleBtn');
  const focusExampleBtnTwo = document.querySelector('#focusExampleBtnTwo');

  focusExampleBtn.addEventListener('click', () => {
    focusExampleElem.focus();
  });

  focusExampleBtnTwo.addEventListener('click', () => {
    focusExampleElem.focus('endDate');
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Slot Examples

#### fromLabel

Sets the label used for the input. When the `range` attribute is used this is the first of two inputs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-datepicker>
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-datepicker>
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### helpText

Sets the help text displayed below the trigger. The `helpText` slot can be used to provide additional context for the combobox. When using the `error` property, the `helpText` slot can be used to describe the error.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helpText.html) -->
  <!-- The below content is automatically added from ./../apiExamples/helpText.html -->
  <auro-datepicker>
    <span slot="label">Choose a date</span>
    <span slot="helpText">Choose a date must be today or earlier.</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helpText.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/helpText.html -->

```html
<auro-datepicker>
  <span slot="label">Choose a date</span>
  <span slot="helpText">Choose a date must be today or earlier.</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### mobileDateLabel

Sets the label used for the selected date display at the top of the bib when viewed in the mobile layout. To view this demo, set your window to a mobile screen size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-datepicker>
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-datepicker>
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### toLabel

Only for use with the `range` attribute. Sets the label for the second input.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicRange.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basicRange.html -->
  <auro-datepicker range>
    <span slot="fromLabel">Departure</span>
    <span slot="toLabel">Return</span>
    <span slot="mobileDateLabel">Roundtrip</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicRange.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicRange.html -->

```html
<auro-datepicker range>
  <span slot="fromLabel">Departure</span>
  <span slot="toLabel">Return</span>
  <span slot="mobileDateLabel">Roundtrip</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Date Slot

Custom content can be added to any day in the calendar using a `slot` named following the pattern `date_{MM}_{DD}_{YYYY}` (e.g. `date_01_08_2024`).

Adding the `highlight` attribute to the slot will change the slot content's color to `var(--ds-color-text-success-default)`.

Slot content support is limited to text only and a maximum of five (5) characters.

Slot content can be styled using [inline styles](https://www.codecademy.com/article/html-inline-styles) or [CSS Parts](https://css-tricks.com/styling-in-the-shadow-dom-with-css-shadow-parts/) (`part="dateSlot"`).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dateSlot.html) -->
  <!-- The below content is automatically added from ./../apiExamples/dateSlot.html -->
  <auro-datepicker centralDate="12/03/2023" minDate="12/04/2023" maxDate="12/09/2023">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
    <span slot="date_12_03_2023">Sold</span>
    <span highlight slot="date_12_04_2023">$89</span>
    <span slot="date_12_05_2023">$100</span>
    <span slot="date_12_06_2023">$2345</span>
    <span highlight slot="date_12_07_2023">$149</span>
    <span highlight slot="date_12_08_2023">$382</span>
    <span slot="date_12_09_2023">$560</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dateSlot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dateSlot.html -->

```html
<auro-datepicker centralDate="12/03/2023" minDate="12/04/2023" maxDate="12/09/2023">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
  <span slot="date_12_03_2023">Sold</span>
  <span highlight slot="date_12_04_2023">$89</span>
  <span slot="date_12_05_2023">$100</span>
  <span slot="date_12_06_2023">$2345</span>
  <span highlight slot="date_12_07_2023">$149</span>
  <span highlight slot="date_12_08_2023">$382</span>
  <span slot="date_12_09_2023">$560</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Popover Slot

Custom content can be added to any day's `auro-popover` in the calendar using a `slot` named following the pattern `popover_{MM}_{DD}_{YYYY}` (e.g. `popover_01_08_2024`).

The popover slot is intended for use with calendar dates that are `disabled` (e.g. before minimum date or after maximum date).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popoverSlot.html) -->
  <!-- The below content is automatically added from ./../apiExamples/popoverSlot.html -->
  <auro-datepicker centralDate="12/03/2023" minDate="12/04/2023" maxDate="12/09/2023">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
    <span slot="popover_12_03_2023">Tickets for this day are sold out</span>
    <span slot="popover_12_04_2023">Tickets for this day are $89</span>
    <span slot="popover_12_05_2023">Tickets for this day are $100</span>
    <span slot="popover_12_06_2023">Tickets for this day are $2345</span>
    <span slot="popover_12_07_2023">Tickets for this day are $149</span>
    <span slot="popover_12_08_2023">Tickets for this day are $382</span>
    <span slot="popover_12_09_2023">Tickets for this day are $560</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popoverSlot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/popoverSlot.html -->

```html
<auro-datepicker centralDate="12/03/2023" minDate="12/04/2023" maxDate="12/09/2023">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
  <span slot="popover_12_03_2023">Tickets for this day are sold out</span>
  <span slot="popover_12_04_2023">Tickets for this day are $89</span>
  <span slot="popover_12_05_2023">Tickets for this day are $100</span>
  <span slot="popover_12_06_2023">Tickets for this day are $2345</span>
  <span slot="popover_12_07_2023">Tickets for this day are $149</span>
  <span slot="popover_12_08_2023">Tickets for this day are $382</span>
  <span slot="popover_12_09_2023">Tickets for this day are $560</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Functional Examples

#### Dynamic Slot Content

This example demonstrates data driven slot content for days in the calendar. In this example, the slot content is inserted into each `auro-calendar-cell` after the bib of the `auro-datepicker` is opened, simulating an API call on a dynamic data source.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dynamicSlot.html) -->
  <!-- The below content is automatically added from ./../apiExamples/dynamicSlot.html -->
  <auro-datepicker id="slotContentExample" centralDate="12/13/2023" minDate="12/13/2023" maxDate="01/18/2024" range>
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamicSlot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dynamicSlot.html -->

```html
<auro-datepicker id="slotContentExample" centralDate="12/13/2023" minDate="12/13/2023" maxDate="01/18/2024" range>
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamicSlot.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/dynamicSlot.js -->

```js
export function populateSlotContentExample() {
  const populateSlotContentExample = document.querySelector('#slotContentExample');

  // Insert slot content when the datepicker has been opened
  populateSlotContentExample.addEventListener('auroDatePicker-toggled', (event) => {
    if (event.detail.expanded) {
      // Array of object(s) containing key, value pairs defining what slot content to render
      const data = [
        {slot: 'date', month: 12, day: 1, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 2, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 3, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 4, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 5, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 6, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 7, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 8, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 9, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 10, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 11, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 12, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 13, year: 2023, content: '$560'},
        {slot: 'date', month: 12, day: 14, year: 2023, content: '$89', highlight: true},
        {slot: 'date', month: 12, day: 15, year: 2023, content: '$100'},
        {slot: 'date', month: 12, day: 16, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 17, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 18, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 19, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 20, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 21, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 22, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 23, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 24, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 25, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 26, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 27, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 28, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 29, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 30, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 31, year: 2023, content: '$2345'},
        {slot: 'date', month: 1, day: 14, year: 2024, content: '$83', highlight: true},
        {slot: 'date', month: 1, day: 15, year: 2024, content: '$203'},
        {slot: 'date', month: 1, day: 16, year: 2024, content: '$4444'},
        {slot: 'date', month: 1, day: 17, year: 2024, content: '$83', highlight: true},
        {slot: 'date', month: 1, day: 18, year: 2024, content: '$96', highlight: true},
        {slot: 'date', month: 1, day: 19, year: 2024, content: 'Sold'},
        {slot: 'date', month: 1, day: 20, year: 2024, content: 'Sold'},
        {slot: 'popover', month: 12, day: 1, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 2, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 3, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 4, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 5, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 6, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 7, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 8, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 9, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 10, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 11, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 12, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 13, year: 2023, content: 'Tickets for this date are $560'},
        {slot: 'popover', month: 12, day: 14, year: 2023, content: 'Tickets for this date are $89'},
        {slot: 'popover', month: 12, day: 15, year: 2023, content: 'Tickets for this date are $100'},
        {slot: 'popover', month: 12, day: 16, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 17, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 18, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 19, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 20, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 21, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 22, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 23, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 24, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 25, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 26, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 27, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 28, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 29, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 30, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 31, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 1, day: 14, year: 2024, content: 'Tickets for this date are $83'},
        {slot: 'popover', month: 1, day: 15, year: 2024, content: 'Tickets for this date are $203'},
        {slot: 'popover', month: 1, day: 16, year: 2024, content: 'Tickets for this date are $4444'},
        {slot: 'popover', month: 1, day: 17, year: 2024, content: 'Tickets for this date are $83'},
        {slot: 'popover', month: 1, day: 18, year: 2024, content: 'Tickets for this date are $96'},
        {slot: 'popover', month: 1, day: 19, year: 2024, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 1, day: 20, year: 2024, content: 'Tickets for this date are sold out'}
      ];

      // For each item in the array, parse the keys into an HTML element and insert it into the DOM
      data.forEach((item) => {
        // Create the new element for the slot content
        const slotElement = document.createElement('span');

        if (item.month.toString().length === 1) {
          item.month = `0` + item.month;
        }

        if (item.day.toString().length === 1) {
          item.day = `0` + item.day;
        }

        // Create the slot name from the item's keys
        const slotName = `${item.slot}_${item.month}_${item.day}_${item.year}`;

        // Set the slot name and content
        slotElement.setAttribute('slot', slotName);
        slotElement.textContent = item.content;

        // Set the 'highlight' attribute on date slot content
        if (item.slot === 'date' && item.highlight) {
          slotElement.setAttribute('highlight', item.highlight);
        }

        // Append the new element to the DOM
        populateSlotContentExample.appendChild(slotElement);
      });
    }

    populateSlotContentExample.pushSlotContent();
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Watch for value changes

The following example listens for the `auroDatePicker-valueSet` event. Once triggered, `element.value` may be queried for the new value **and** in successful scenarios, an alert will appear. Open the JavaScript console in the browser's developer tools to see the `console.warn` message that appears after the `auroDatePicker-valueSet` event has been triggered.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/alertValue.html) -->
  <!-- The below content is automatically added from ./../apiExamples/alertValue.html -->
  <auro-datepicker id="datePickerValueAlert">
    <span slot="fromLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/alertValue.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/alertValue.html -->

```html
<auro-datepicker id="datePickerValueAlert">
  <span slot="fromLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/alertValue.js) -->
<!-- The below code snippet is automatically added from ./../apiExamples/alertValue.js -->

```js
export function alertValueExample() {
  const valueAlertExample = document.querySelector('#datePickerValueAlert');

  valueAlertExample.addEventListener('auroDatePicker-valueSet', () => {
    console.warn('Select value changed to:', valueAlertExample.value);
    alert(`Select value changed to: ${valueAlertExample.value}`);
  })
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
/* stylelint-disable color-function-notation */

@import './../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables';

:host {
  --ds-auro-datepicker-placeholder-color: var(--ds-color-text-secondary-default, #{$ds-color-text-secondary-default});
  --ds-auro-datepicker-range-input-divider-color: var(--ds-color-border-primary-default, #{$ds-color-border-primary-default});
  --ds-auro-calendar-mobile-footer-container-color: var(--ds-color-container-primary-default, #{$ds-color-container-primary-default});
  --ds-auro-calendar-mobile-header-boxshadow-color: var(--ds-elevation-200, #{$ds-elevation-200});
  --ds-auro-calendar-mobile-header-container-color: var(--ds-color-container-primary-default, #{$ds-color-container-primary-default});
  --ds-auro-calendar-mobile-header-divider-color: var(--ds-color-border-divider-default, #{$ds-color-border-divider-default});
  --ds-auro-calendar-mobile-header-text-color: var(--ds-color-text-secondary-default, #{$ds-color-text-secondary-default});
  --ds-auro-calendar-nav-btn-border-color: transparent;
  --ds-auro-calendar-nav-btn-chevron-color: var(--ds-color-icon-ui-primary-default-default, #{$ds-color-icon-ui-primary-default-default});
  --ds-auro-calendar-nav-btn-container-color: transparent;
  --ds-auro-calendar-month-container-color: var(--ds-color-container-primary-default, #{$ds-color-container-primary-default});
  --ds-auro-calendar-month-divider-color: var(--ds-color-border-divider-default, #{$ds-color-border-divider-default});
  --ds-auro-calendar-month-header-color: var(--ds-color-text-primary-default, #{$ds-color-text-primary-default});
  --ds-auro-calendar-cell-border-color: transparent;
  --ds-auro-calendar-cell-boxshadow-color: var(--ds-elevation-200, #{$ds-elevation-200});
  --ds-auro-calendar-cell-container-color: transparent;
  --ds-auro-calendar-cell-in-range-color: var(--ds-color-container-secondary-default, #{$ds-color-container-secondary-default});
  --ds-auro-calendar-cell-price-text-color: var(--ds-color-text-primary-default, #{$ds-color-text-primary-default});
  --ds-auro-calendar-cell-text-color: var(--ds-color-text-primary-default, #{$ds-color-text-primary-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
