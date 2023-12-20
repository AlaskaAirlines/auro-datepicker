# datepicker

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `<auro-datepicker>` element allows users to select a date, or a pair of dates identifying a range, either with text input or by making a section in a calendar. The `<auro-datepicker>` element is the combination of [auro-dropdown](http://auro.alaskaair.com/components/auro/dropdown), [auro-input](http://auro.alaskaair.com/components/auro/input), and Auro's extension of [wc-range-datepicker](https://www.npmjs.com/package/wc-range-datepicker).
<!-- AURO-GENERATED-CONTENT:END -->

## auro-datepicker use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-datepicker>` element should be used in situations where users may:

* select a single date
* select a pair of dates which identify a calendar range
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popover.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/popover.html -->
  <auro-datepicker centralDate="10/01/2023" minDate="09/01/2023" maxDate="01/31/2024">
    <span slot="fromLabel">Choose a date</span>
    <span slot="mobileDateLabel">Choose a date</span>
    <span slot="date_09_01_2023">$132</span>
    <span slot="date_09_12_2023">$1000</span>
    <span slot="date_09_21_2023">$242</span>
    <span slot="date_10_11_2023">$784</span>
    <span slot="date_10_15_2023">$567</span>
    <span slot="date_10_16_2023">$1234</span>
    <span slot="date_10_21_2023">$45</span>
    <span slot="date_11_01_2023">$1000</span>
    <span slot="date_11_02_2023">$200</span>
    <span slot="date_11_08_2023">$200</span>
    <span slot="date_11_18_2023">$100</span>
    <span slot="date_12_01_2023">$23</span>
    <span slot="date_12_06_2023">$5600</span>
    <span slot="date_01_01_2024">$202</span>
    <span slot="date_01_05_2024">$3022</span>
    <span slot="popover_09_01_2023">Tickets for this date are $132</span>
    <span slot="popover_09_12_2023">Tickets for this date are $1000</span>
    <span slot="popover_09_21_2023">Tickets for this date are $242</span>
    <span slot="popover_10_11_2023">Tickets for this date are $784</span>
    <span slot="popover_10_15_2023">Tickets for this date are $567</span>
    <span slot="popover_10_16_2023">Tickets for this date are $1234</span>
    <span slot="popover_10_21_2023">Tickets for this date are $45</span>
    <span slot="popover_11_01_2023">Tickets for this date are $1000</span>
    <span slot="popover_11_02_2023">Tickets for this date are $200</span>
    <span slot="popover_11_08_2023">Tickets for this date are $200</span>
    <span slot="popover_11_18_2023">Tickets for this date are $100</span>
    <span slot="popover_12_01_2023">Tickets for this date are $23</span>
    <span slot="popover_12_06_2023">Tickets for this date are $5600</span>
    <span slot="popover_01_01_2024">Tickets for this date are $202</span>
    <span slot="popover_01_05_2024">Tickets for this date are $3022</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popover.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/popover.html -->

```html
<auro-datepicker centralDate="10/01/2023" minDate="09/01/2023" maxDate="01/31/2024">
  <span slot="fromLabel">Choose a date</span>
  <span slot="mobileDateLabel">Choose a date</span>
  <span slot="date_09_01_2023">$132</span>
  <span slot="date_09_12_2023">$1000</span>
  <span slot="date_09_21_2023">$242</span>
  <span slot="date_10_11_2023">$784</span>
  <span slot="date_10_15_2023">$567</span>
  <span slot="date_10_16_2023">$1234</span>
  <span slot="date_10_21_2023">$45</span>
  <span slot="date_11_01_2023">$1000</span>
  <span slot="date_11_02_2023">$200</span>
  <span slot="date_11_08_2023">$200</span>
  <span slot="date_11_18_2023">$100</span>
  <span slot="date_12_01_2023">$23</span>
  <span slot="date_12_06_2023">$5600</span>
  <span slot="date_01_01_2024">$202</span>
  <span slot="date_01_05_2024">$3022</span>
  <span slot="popover_09_01_2023">Tickets for this date are $132</span>
  <span slot="popover_09_12_2023">Tickets for this date are $1000</span>
  <span slot="popover_09_21_2023">Tickets for this date are $242</span>
  <span slot="popover_10_11_2023">Tickets for this date are $784</span>
  <span slot="popover_10_15_2023">Tickets for this date are $567</span>
  <span slot="popover_10_16_2023">Tickets for this date are $1234</span>
  <span slot="popover_10_21_2023">Tickets for this date are $45</span>
  <span slot="popover_11_01_2023">Tickets for this date are $1000</span>
  <span slot="popover_11_02_2023">Tickets for this date are $200</span>
  <span slot="popover_11_08_2023">Tickets for this date are $200</span>
  <span slot="popover_11_18_2023">Tickets for this date are $100</span>
  <span slot="popover_12_01_2023">Tickets for this date are $23</span>
  <span slot="popover_12_06_2023">Tickets for this date are $5600</span>
  <span slot="popover_01_01_2024">Tickets for this date are $202</span>
  <span slot="popover_01_05_2024">Tickets for this date are $3022</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Range

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popoverRange.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/popoverRange.html -->
  <auro-datepicker range centralDate="10/01/2023" minDate="09/01/2023" maxDate="01/31/2024">
    <span slot="fromLabel">Departure</span>
    <span slot="toLabel">Return</span>
    <span slot="mobileDateLabel">Roundtrip</span>
    <span slot="date_09_01_2023">$132</span>
    <span slot="date_09_12_2023">$1000</span>
    <span slot="date_09_21_2023">$242</span>
    <span slot="date_10_11_2023">$784</span>
    <span slot="date_10_15_2023">$567</span>
    <span slot="date_10_16_2023">$1234</span>
    <span slot="date_10_21_2023">$45</span>
    <span slot="date_11_01_2023">$1000</span>
    <span slot="date_11_02_2023">$200</span>
    <span slot="date_11_08_2023">$200</span>
    <span slot="date_11_18_2023">$100</span>
    <span slot="date_12_01_2023">$23</span>
    <span slot="date_12_06_2023">$5600</span>
    <span slot="date_01_01_2024">$202</span>
    <span slot="date_01_05_2024">$3022</span>
    <span slot="popover_09_01_2023">Tickets for this date are $132</span>
    <span slot="popover_09_12_2023">Tickets for this date are $1000</span>
    <span slot="popover_09_21_2023">Tickets for this date are $242</span>
    <span slot="popover_10_11_2023">Tickets for this date are $784</span>
    <span slot="popover_10_15_2023">Tickets for this date are $567</span>
    <span slot="popover_10_16_2023">Tickets for this date are $1234</span>
    <span slot="popover_10_21_2023">Tickets for this date are $45</span>
    <span slot="popover_11_01_2023">Tickets for this date are $1000</span>
    <span slot="popover_11_02_2023">Tickets for this date are $200</span>
    <span slot="popover_11_08_2023">Tickets for this date are $200</span>
    <span slot="popover_11_18_2023">Tickets for this date are $100</span>
    <span slot="popover_12_01_2023">Tickets for this date are $23</span>
    <span slot="popover_12_06_2023">Tickets for this date are $5600</span>
    <span slot="popover_01_01_2024">Tickets for this date are $202</span>
    <span slot="popover_01_05_2024">Tickets for this date are $3022</span>
  </auro-datepicker>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popoverRange.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/popoverRange.html -->

```html
<auro-datepicker range centralDate="10/01/2023" minDate="09/01/2023" maxDate="01/31/2024">
  <span slot="fromLabel">Departure</span>
  <span slot="toLabel">Return</span>
  <span slot="mobileDateLabel">Roundtrip</span>
  <span slot="date_09_01_2023">$132</span>
  <span slot="date_09_12_2023">$1000</span>
  <span slot="date_09_21_2023">$242</span>
  <span slot="date_10_11_2023">$784</span>
  <span slot="date_10_15_2023">$567</span>
  <span slot="date_10_16_2023">$1234</span>
  <span slot="date_10_21_2023">$45</span>
  <span slot="date_11_01_2023">$1000</span>
  <span slot="date_11_02_2023">$200</span>
  <span slot="date_11_08_2023">$200</span>
  <span slot="date_11_18_2023">$100</span>
  <span slot="date_12_01_2023">$23</span>
  <span slot="date_12_06_2023">$5600</span>
  <span slot="date_01_01_2024">$202</span>
  <span slot="date_01_05_2024">$3022</span>
  <span slot="popover_09_01_2023">Tickets for this date are $132</span>
  <span slot="popover_09_12_2023">Tickets for this date are $1000</span>
  <span slot="popover_09_21_2023">Tickets for this date are $242</span>
  <span slot="popover_10_11_2023">Tickets for this date are $784</span>
  <span slot="popover_10_15_2023">Tickets for this date are $567</span>
  <span slot="popover_10_16_2023">Tickets for this date are $1234</span>
  <span slot="popover_10_21_2023">Tickets for this date are $45</span>
  <span slot="popover_11_01_2023">Tickets for this date are $1000</span>
  <span slot="popover_11_02_2023">Tickets for this date are $200</span>
  <span slot="popover_11_08_2023">Tickets for this date are $200</span>
  <span slot="popover_11_18_2023">Tickets for this date are $100</span>
  <span slot="popover_12_01_2023">Tickets for this date are $23</span>
  <span slot="popover_12_06_2023">Tickets for this date are $5600</span>
  <span slot="popover_01_01_2024">Tickets for this date are $202</span>
  <span slot="popover_01_05_2024">Tickets for this date are $3022</span>
</auro-datepicker>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
