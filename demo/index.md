# datepicker

The `<auro-datepicker>` element allows users to select a date, either with text input or by displaying a calendar. The `<auro-datepicker>` element is the combination of [auro-dropdown](http://auro.alaskaair.com/components/auro/dropdown), [auro-input](http://auro.alaskaair.com/components/auro/input), and Auro's extension of [Lion calendar](https://lion-web.netlify.app/components/calendar/overview/).

## auro-datepicker use cases

The `<auro-datepicker>` element should be used in situations where users may:

* select a single date
* select a starting date and an ending date (with two separate datepickers)

## Example(s)

<div class="exampleWrapper">
  <!-- <auro-datepicker required>
    <span slot="fromLabel">Departure</span>
  </auro-datepicker> -->
  <auro-datepicker range required minDate="03/20/2023" maxDate="03/25/2023">
    <span slot="fromLabel">Departure</span>
    <span slot="toLabel">Return</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

</auro-accordion>
