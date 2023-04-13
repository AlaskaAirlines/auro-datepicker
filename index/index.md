# datepicker

The `<auro-datepicker>` element allows users to select a date, either with text input or by displaying a calendar. The `<auro-datepicker>` element is the combination of [auro-dropdown](http://auro.alaskaair.com/components/auro/dropdown), [auro-input](http://auro.alaskaair.com/components/auro/input), and Auro's extension of [Lion calendar](https://lion-web.netlify.app/components/calendar/overview/).

## auro-datepicker use cases

The `<auro-datepicker>` element should be used in situations where users may:

* select a single date
* select a starting date and an ending date (with two separate datepickers)

## Example(s)

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-datepicker>
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->
```html
<auro-datepicker>
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Range

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basicRange.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basicRange.html -->
  <auro-datepicker range>
    <span slot="fromLabel">Departure</span>
    <span slot="toLabel">Return</span>
    <span slot="mobileDateLabel">Roundtrip</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basicRange.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basicRange.html -->
```html
<auro-datepicker range>
  <span slot="fromLabel">Departure</span>
  <span slot="toLabel">Return</span>
  <span slot="mobileDateLabel">Roundtrip</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
