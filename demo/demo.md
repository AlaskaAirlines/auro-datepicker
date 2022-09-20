# datepicker

The `<auro-datepicker>` element allows users to select a date, either with text input or by displaying a calendar. The `<auro-datepicker>` element is the combination of [auro-dropdown](http://auro.alaskaair.com/components/auro/dropdown), [auro-input](http://auro.alaskaair.com/components/auro/input), and Auro's extension of [Lion calendar](https://lion-web.netlify.app/components/calendar/overview/).

## auro-datepicker use cases

The `<auro-datepicker>` element should be used in situations where users may:

* select a single date
* select a starting date and an ending date (with two separate datepickers)

## Example(s)

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Choose a date</span>
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
