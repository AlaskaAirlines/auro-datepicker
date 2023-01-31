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

To give a higher limit you can bind a date to the `maxDate` property.

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

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/maxDate.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/updateMaxDate.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### minDate

To give a lower limit you can bind a date to the `minDate` property.

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

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/minDate.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/updateMinDate.html) -->
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

#### value

Value selected for the datepicker. Can be used to pre-set the value of the datepicker.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/value.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/value.js) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Method Examples

#### focus

The focus method will apply focus state to the datepicker input field.

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

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/errorHelpText.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/errorHelpText.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### label

Sets the label used in the trigger. All datepickers should include a definition for the label slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
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
