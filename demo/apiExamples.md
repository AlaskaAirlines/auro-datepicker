

# auro-datepicker

## Properties

| Property                | Attribute               | Type      | Default          | Description                                      |
|-------------------------|-------------------------|-----------|------------------|--------------------------------------------------|
| [centralDate](#centralDate)           | `centralDate`           |           |                  |                                                  |
| [disableDates](#disableDates)          | `disableDates`          | `string`  | "undefined"      |                                                  |
| [disabled](#disabled)              | `disabled`              | `Boolean` |                  | If set, disables the datepicker.                 |
| [error](#error)                 | `error`                 | `Boolean` | false            | Sets a persistent error state (e.g. an error state returned from the server). |
| [firstDayOfWeek](#firstDayOfWeek)        | `firstDayOfWeek`        | `number`  | 0                |                                                  |
| [locale](#locale)                | `locale`                | `string`  | "undefined"      |                                                  |
| [maxDate](#maxDate)               | `maxDate`               |           | "undefined"      |                                                  |
| [minDate](#minDate)               | `minDate`               |           | "undefined"      |                                                  |
| [optionSelected](#optionSelected)        | `optionSelected`        | `Object`  |                  | Specifies the current selected option.           |
| [required](#required)              | `required`              | `Boolean` |                  | Populates the `required` attribute on the input. Used for client-side validation. |
| [selectedDate](#selectedDate)          | `selectedDate`          |           | "undefined"      |                                                  |
| [triggerIcon](#triggerIcon)           | `triggerIcon`           | `Boolean` |                  | If set, the `icon` attribute will be applied to the trigger `auro-input` element. |
| [type](#type)                  | `type`                  | `String`  | "month-day-year" | Applies the defined value as the type attribute on auro-input. |
| [value](#value)                 | `value`                 | `String`  | "undefined"      | Value selected for the date picker.              |
| [weekdayHeaderNotation](#weekdayHeaderNotation) | `weekdayHeaderNotation` | `string`  | "narrow"         |                                                  |

## Events

| Event                  | Type               | Description                                      |
|------------------------|--------------------|--------------------------------------------------|
| `auroDatePicker-ready` | `CustomEvent<any>` | Notifies that the component has finished initializing. |

## Slots

| Name       | Description                          |
|------------|--------------------------------------|
| [helpText](#helpText) | Defines the content of the helpText. |
| [label](#label)    | Defines the content of the label.    |

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
        <span slot="label">Date of Birth</span>
      </auro-datepicker>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker minDate="6/15/2022" maxDate="6/30/2030">
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>
