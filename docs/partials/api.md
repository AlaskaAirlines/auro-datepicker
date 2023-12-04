<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Property Examples

#### centralDate

Date that determines the currently visible month.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/centralDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/centralDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### disabled

If set, disables the datepicker.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/disabled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### error

Sets a persistent error state (e.g. an error state returned from the server). This error state will override all default validation until the error attribute is removed from the datepicker.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/error.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### maxDate

To give a higher limit you can bind a date to the `maxDate` property. It is recommended to use the `setCustomValidityRangeOverflow` attribute to define an error message to display when validation fails the maximum date restriction.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/maxDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/maxDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

Setting the `maxDate` attribute to a date earlier than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is later than the new `maxDate`, the calendar view will move to the new `maxDate` month.

This example demonstrates that behavior.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/updateMaxDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/updateMaxDate.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/updateMaxDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### minDate

To give a lower limit you can bind a date to the `minDate` property. It is recommended to use the `setCustomValidityRangeUnderflow` attribute to define an error message to display when validation fails the minimum date restriction.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/minDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/minDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

Setting the `minDate` attribute to a date later than the auro-datepicker `value` will result in the following changes to the component state:

* `value` will to reset to `undefined`.
* If the currently viewed calendar month is earlier than the new `minDate`, the calendar view will move to the new `minDate` month.

This example demonstrates that behavior.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/updateMinDate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/updateMinDate.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/updateMinDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### monthNames

May be used to provide localized month names. These names will only be shown in the calendar when viewed on a mobile device.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/monthNames.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/monthNames.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/monthNames.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### noValidate

When set, the datepicker will not validate when navigating away from the component.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/noValidate.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/noValidate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### range

When used, the datepicker will display two inputs and the component will support selection of dates for a start and end date.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basicRange.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basicRange.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### required

Populates the `required` attribute on the input. Used for client-side validation.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/required.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/required.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### validity

Specifies the `validityState` the element is in. Upon first interaction, or presetting the `error` attribute, the component will validate on `focusout`. After validation, `validityState` can be queried from the component by using the following JavaScript.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/validity.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/validity.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/validity.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


#### value

Value selected for the datepicker. Can be used to pre-set the value of the datepicker. When the `range` attribute is used, `value` is for the first input.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/value.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### valueEnd

Value of the second input (end date), selected for the datepicker. Can be used to pre-set the value of the datepicker. Only applicable for a datepicker with the `range` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/valueEnd.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/valueEnd.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Method Examples

#### focus

The focus method will apply focus state to the datepicker's input field.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/focus.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/focus.js) -->
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/focus.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Slot Examples

#### fromLabel

Sets the label used for the input. When the `range` attribute is used this is the first of two inputs.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### helpText

Sets the help text displayed below the trigger. The `helpText` slot can be used to provide additional context for the combobox. When using the `error` property, the `helpText` slot can be used to describe the error.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/helpText.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/helpText.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### mobileDateLabel

Sets the label used for the selected date display at the top of the bib when viewed in the mobile layout. To view this demo, set your window to a mobile screen size.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### toLabel

Only for use with the `range` attribute. Sets the label for the second input.


<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basicRange.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basicRange.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Day Slot

Each day within the calendar has a slot that allows a user to add custom content. The user will add their slot content withtin the `auro-datepicker`, with the slot name needing to be in the format of `date_{month}_{day}_{fullYear}`. 

**Note**: When the month is a single digit, a zero will need to be added to the front of the month. For example, January would be `01` and not `1`.

In order to style your slot content, we recommend using in-line styles on your component, as the day slot content is passed down multiple levels within the component. Another way to style the component is to target the `part="daySlot"` attribute that is added to the container around the slot content.

**Disclaimer**: This element only supports the use of default text or Auro icons to be slotted in the calendar at this time.

In the following example, please see how pricing content is threaded into the element's `<slot>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/daySlot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/daySlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Day Slot w/ Text and Range Selection

The following example illustrates slotted content in combination with the `range` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/daySlotRange.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/daySlotRange.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Day Slot w/ Icon

The following example illustrates how the `<auro-icon>` element can be used as slotted content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/daySlotIcon.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/daySlotIcon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Popover Slot

Each day within the calendar has a slot that allows a user to add content into an `auro-popover` that will appear when hovering or adding focus to a calendar cell. The user will add their slot content withtin the `auro-datepicker`, with the slot name needing to be in the format of `popover_{month}_{day}_{fullYear}`. 

**Note**: When the month is a single digit, a zero will need to be added to the front of the month. For example, January would be `01` and not `1`.

In the following example, please see how popover content is threaded into the element's `<slot>`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Popover Slot w/ Range Selection

The following example illustrates popover content in combination with the `range` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popoverRange.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popoverRange.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Functional Examples

### Watch for value changes

The following example listens for the `auroDatePicker-valueSet` event. Once triggered, `element.value` may be queried for the new value **and** in successful scenarios, an alert will appear. Open the JavaScript console in the browser's developer tools to see the `console.warn` message that appears after the `auroDatePicker-valueSet` event has been triggered.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/alertValue.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>


<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/alertValue.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/alertValue.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
