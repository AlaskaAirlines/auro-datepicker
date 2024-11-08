<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/calendarStartAndEndDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### calendarFocusDate

The `calendarFocusDate` controls which calendar month is first presented to the user when they open the dropdown bib.

In <strong>desktop</strong> layout, the first month actually rendered will be the `calendarFocusDate` if defined. Once the user manually navigates the calendar to a different month, the calendar view will remain where the user left off when they close and reopen the bib. If the `calendarFocusDate` property is changed, this will re-render the calendar starting at the new date. If `calendarFocusDate` is undefined, the first rendered month will be the current date or the first renderable date defined by `calendarStartDate`.

In <strong>mobile</strong> layout, upon first opening the bib, the vertical list of months will scroll (with no animation) to the month defined by the `calendarFocusDate`. If the user scrolls the list to a different position, the scroll position will remain where the user left off when they close and reopen the bib. If the `calendarFocusDate` is changed, the list will scroll to the new dates month. If `calendarFocusDate` is undefined, the list will start at the top most scroll position.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/calendarFocusDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/calendarFocusDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### disabled

If set, disables the datepicker.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### error

Sets a persistent error state (e.g. an error state returned from the server). This error state will override all default validation until the error attribute is removed from the datepicker.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### maxDate

To give a higher limit you can bind a date to the `maxDate` property. It is recommended to use the `setCustomValidityRangeOverflow` attribute to define an error message to display when validation fails the maximum date restriction.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/maxDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/maxDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

Setting the `maxDate` attribute to a date earlier than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is later than the new `maxDate`, the calendar view will move to the new `maxDate` month.

This example demonstrates that behavior.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/updateMaxDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMaxDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMaxDate.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### minDate

To give a lower limit you can bind a date to the `minDate` property. It is recommended to use the `setCustomValidityRangeUnderflow` attribute to define an error message to display when validation fails the minimum date restriction.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/minDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/minDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

Setting the `minDate` attribute to a date later than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is earlier than the new `minDate`, the calendar view will move to the new `minDate` month.

This example demonstrates that behavior.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/updateMinDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMinDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/updateMinDate.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### monthNames

May be used to provide localized month names. These names will only be shown in the calendar when viewed on a mobile device.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/monthNames.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/monthNames.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/monthNames.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### noValidate

When set, the datepicker will not validate when navigating away from the component.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/noValidate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/noValidate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### range

When used, the datepicker will display two inputs and the component will support selection of dates for a start and end date.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicRange.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicRange.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### required

Populates the `required` attribute on the input. Used for client-side validation.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/required.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/required.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### validity

Specifies the `validityState` the element is in. Upon first interaction, or presetting the `error` attribute, the component will validate on `focusout`. After validation, `validityState` can be queried from the component by using the following JavaScript.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/validity.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/validity.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/validity.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


#### value

Value selected for the datepicker. Can be used to pre-set the value of the datepicker. When the `range` attribute is used, `value` is for the first input.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/value.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/value.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### valueEnd

Value of the second input (end date), selected for the datepicker. Can be used to pre-set the value of the datepicker. Only applicable for a datepicker with the `range` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/valueEnd.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/valueEnd.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Method Examples

#### focus

The focus method will apply focus state to the datepicker's input field.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/focus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/focus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/focus.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Slot Examples

#### fromLabel

Sets the label used for the input. When the `range` attribute is used this is the first of two inputs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### helpText

Sets the help text displayed below the trigger. The `helpText` slot can be used to provide additional context for the combobox. When using the `error` property, the `helpText` slot can be used to describe the error.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helpText.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helpText.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### mobileDateLabel

Sets the label used for the selected date display at the top of the bib when viewed in the mobile layout. To view this demo, set your window to a mobile screen size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### toLabel

Only for use with the `range` attribute. Sets the label for the second input.


<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicRange.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicRange.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Date Slot

Custom content can be added to any day in the calendar using a `slot` named following the pattern `date_{MM}_{DD}_{YYYY}` (e.g. `date_01_08_2024`).

Adding the `highlight` attribute to the slot will change the slot content's color to `var(--ds-color-text-success-default)`.

Slot content support is limited to text only and a maximum of five (5) characters.

Slot content can be styled using [inline styles](https://www.codecademy.com/article/html-inline-styles) or [CSS Parts](https://css-tricks.com/styling-in-the-shadow-dom-with-css-shadow-parts/) (`part="dateSlot"`).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dateSlot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dateSlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Popover Slot

Custom content can be added to any day's `auro-popover` in the calendar using a `slot` named following the pattern `popover_{MM}_{DD}_{YYYY}` (e.g. `popover_01_08_2024`).

The popover slot is intended for use with calendar dates that are `disabled` (e.g. before minimum date or after maximum date).

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popoverSlot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popoverSlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Functional Examples

#### Dynamic Slot Content

This example demonstrates data driven slot content for days in the calendar. In this example, the slot content is inserted into each `auro-calendar-cell` after the bib of the `auro-datepicker` is opened, simulating an API call on a dynamic data source.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/dynamicSlot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamicSlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/dynamicSlot.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Watch for value changes

The following example listens for the `auroDatePicker-valueSet` event. Once triggered, `element.value` may be queried for the new value **and** in successful scenarios, an alert will appear. Open the JavaScript console in the browser's developer tools to see the `console.warn` message that appears after the `auroDatePicker-valueSet` event has been triggered.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/alertValue.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>


<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/alertValue.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/alertValue.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
