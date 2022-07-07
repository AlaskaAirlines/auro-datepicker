

# auro-datepicker

## Properties

| Property       | Attribute      | Type                | Default          | Description                                      |
|----------------|----------------|---------------------|------------------|--------------------------------------------------|
| [centralDate](#centralDate)  | `centralDate`  | `Object`            |                  | The date that determines the currently visible month. |
| [disabled](#disabled)     | `disabled`     | `Boolean`           |                  | If set, disables the datepicker.                 |
| [error](#error)        | `error`        | `Boolean`           | false            | Sets a persistent error state (e.g. an error state returned from the server). |
| [maxDate](#maxDate)      | `maxDate`      | `Date`              | "undefined"      | Maximum date. All dates after will be disabled.  |
| [minDate](#minDate)      | `minDate`      | `Date`              | "undefined"      | Minimum date. All dates before will be disabled. |
| [required](#required)     | `required`     | `Boolean`           |                  | Populates the `required` attribute on the input. Used for client-side validation. |
| [selectedDate](#selectedDate) | `selectedDate` | `Date \| undefined` | "undefined"      | The selected date.                               |
| [type](#type)         | `type`         | `string`            | "month-day-year" |                                                  |
| [value](#value)        | `value`        | `String`            | "undefined"      | Value selected for the date picker.              |

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
      <auro-datepicker>
        <span slot="label">Date of Birth</span>
      </auro-datepicker>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-datepicker" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <auro-datepicker>
    <span slot="label">Date of Birth</span>
  </auro-datepicker>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-datepicker>
  <span slot="label">Date of Birth</span>
</auro-datepicker>
```

</auro-accordion>
