# datepicker

`<auro-datepicker>` lets guests select a date by displaying them on a calendar. The user can either type in a date in the input field or make a selection on the calendar itself to choose a date. `<auro-datepicker>` is the combination of [dropdown](http://auro.alaskaair.com/components/auro/dropdown), [input](http://auro.alaskaair.com/components/auro/input), and [calendar](http://auro.alaskaair.com/components/auro/calendar).

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
