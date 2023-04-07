import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import '../src/auro-datepicker';
import '@aurodesignsystem/auro-dropdown';
import '@aurodesignsystem/auro-input';

describe('auro-datepicker', () => {
  // it('auro-datepicker is accessible', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker cssclass="testClass"></auro-datepicker>
  //   `);

  //   await expect(el).to.be.accessible();
  // });

  it('custom element is defined', async () => {
    const el = await !!customElements.get("auro-datepicker");

    await expect(el).to.be.true;
  });

  // it('can programmatically apply focus to input', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker></auro-datepicker>
  //   `);

  //   const input = el.shadowRoot.querySelector('auro-input');

  //   el.focus();

  //   await expect(el.shadowRoot.activeElement).to.be.equal(input);
  // });

  it('opens the bib when clicking on the dropdown trigger', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    const input = el.shadowRoot.querySelector('auro-input');
    input.click();

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');

    await expect(dropdown.isPopoverVisible).to.be.true;
  });

  it('closes the mobile bib when clickig the top left back button', async () => {
    //
  });

  it('closes the mobile bib when clickig the bottom done', async () => {
    //
  });

  // it('handles the required state being set', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker required></auro-datepicker>
  //   `);

  //   await expect(el.hasAttribute('validity')).to.be.false;

  //   el.focus();
  //   el.blur();

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('valueMissing');

  //   el.value = '03/03/2023';

  //   el.focus();
  //   el.blur();

  //   await expect(el.getAttribute('validity')).to.be.equal('valid');
  // });

  it('auro-input receives the required attribute from auro-datepicker', async () => {
    const el = await fixture(html`
      <auro-datepicker required></auro-datepicker>
    `);

    const input = el.shadowRoot.querySelector('auro-input');

    await expect(el.hasAttribute('required')).to.be.true;
    await expect(input.hasAttribute('required')).to.be.true;
  });

  it('can preset a value', async () => {
    const el = await fixture(html`
      <auro-datepicker value="01/01/2022"></auro-datepicker>
    `);

    await elementUpdated(el);

    const input = el.shadowRoot.querySelector('auro-input');

    const setDate = new Date('01/01/2022').toDateString();
    const inputDate = new Date(input.value).toDateString();

    await expect(inputDate).to.be.equal(setDate);
  });

  it('can preset a range', async () => {
    const el = await fixture(html`
      <auro-datepicker range value="01/01/2023" valueEnd="01/15/2023"></auro-datepicker>
    `);

    await elementUpdated(el);

    const departInput = getInput(el, 0);

    const setDepartDate = new Date('01/01/2023').toDateString();
    const departInputDate = new Date(departInput.value).toDateString();

    await expect(departInputDate).to.be.equal(setDepartDate);

    const returnInput = getInput(el, 1);

    const setReturnDate = new Date('01/15/2023').toDateString();
    const returnInputDate = new Date(returnInput.value).toDateString();

    await expect(returnInputDate).to.be.equal(setReturnDate);
  });

  // it('respects maxDate setting on datepicker when range is false', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker maxDate="01/01/2022"></auro-datepicker>
  //   `);

  //   el.value = "01/01/2022";

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('valid');

  //   el.value = "01/02/2022";

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('rangeOverflow');
  // });

  // it('respects maxDate setting on second input', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker range maxDate="01/05/2022"></auro-datepicker>
  //   `);

  //   el.value = "01/01/2022";

  //   el.valueEnd = "01/08/2022";

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('rangeOverflow');
  // });

  // it('resets datepicker when maxDate is at an earlier date than current value', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker></auro-datepicker>
  //   `);

  //   el.value = '03/02/2023';

  //   await elementUpdated(el);

  //   el.maxDate = '02/26/2023';

  //   await elementUpdated(el);

  //   await expect(el.value).to.be.equal(undefined);
  // });

  // it('respects minDate setting', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker minDate="01/02/2022"></auro-datepicker>
  //   `);

  //   el.value = "01/02/2022";

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('valid');

  //   el.value = "01/01/2022";

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('rangeUnderflow');
  // });

  // it('respects minDate setting on second input', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker minDate="01/05/2022"></auro-datepicker>
  //   `);

  //   el.value = "01/02/2022";

  //   el.valueEnd = "01/06/2022";

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('rangeUnderflow');
  // });

  it('resets datepicker when minDate is at a later date than current value', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    el.value = '03/02/2023';

    await elementUpdated(el);

    el.minDate = '03/09/2023';

    await elementUpdated(el);

    await expect(el.value).to.be.equal(undefined);
  });

  it('updates centralDate when minDate is later than centralDate', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    el.centralDate = '03/02/2023';

    await elementUpdated(el);

    el.minDate = '04/09/2023';

    await elementUpdated(el);

    await expect(el.centralDate).to.be.equal(el.minDate);
  });

  // it('selecting a dateFrom date by clicking on the calendar sets the correct value', async () => {
  //   //
  // });

  // it('selecting a dateTo date by clicking on the calendar sets the correct value', async () => {
  //   //
  // });

  // it('hides the prev month button when viewing the first available month', async () => {
  //   //
  // });

  // it('hides the next month button when viewing the last available month', async () => {
  //   //
  // });

  it('removing error attribute reruns validity even when value is undefined', async () => {
    const el = await fixture(html`
      <auro-datepicker error="custom error message"></auro-datepicker>
    `);

    await expect(el.getAttribute('validity')).to.be.equal('customError');

    el.removeAttribute('error');

    await elementUpdated(el);

    await expect(el.hasAttribute('validity')).to.be.true;
  });

  // it('dateFrom error message shown when dateTo is also invalid', async () => {
  //   //
  // });

  // it('dateTo error message shown when dateFrom is valid', async () => {
  //   //
  // });

  // it('typing into the dateFrom input opens the bib', async () => {
  //   //
  // });

  // it('typing into the dateTo input opens the bib', async () => {
  //   //
  // });

  it('changing centralDate changes month visibility', async () => {
    const el = await fixture(html`
      <auro-datepicker centralDate="03/23/2023"></auro-datepicker>
    `);

    const calendar = el.shadowRoot.querySelector('auro-calendar');

    await expect(calendar.month).to.be.equal(3);
    await expect(calendar.year).to.be.equal(2023);

    el.centralDate = '04/25/2024';

    await elementUpdated(el);

    await expect(calendar.month).to.be.equal(4);
    await expect(calendar.year).to.be.equal(2024);
  });

  it('renders a single calendar by default', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    const calendar = el.shadowRoot.querySelector('auro-calendar');

    await expect(calendar.numCalendars).to.be.equal(1);
  });

  it('renders two calendars when range attribute is present', async () => {
    const el = await fixture(html`
      <auro-datepicker range></auro-datepicker>
    `);

    const calendar = el.shadowRoot.querySelector('auro-calendar');

    await expect(calendar.numCalendars).to.be.equal(2);
  });

  it('renders twelve calendars in mobile version', async () => {
    window.innerWidth = 600;

    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    const calendar = el.shadowRoot.querySelector('auro-calendar');

    await expect(calendar.numCalendars).to.be.equal(12);
  });

  // it('can convert unix timestamp to date object', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker></auro-datepicker>
  //   `);

  //   const timestamp = 1680566400;

  //   const conversion = el.convertWcTimeToDate(timestamp);

  //   await expect(conversion).to.equal('04/03/2023');
  // });

  // it('updates input value when value is changed', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker range></auro-datepicker>
  //   `);

  //   const input1 = getInput(el, 0);
  //   const input2 = getInput(el, 1);

  //   setInputValue(input1, '04/03/2023');
  //   setInputValue(input2, '04/04/2023');

  //   await elementUpdated(el);

  //   el.valueEnd = '04/09/202';

  //   await elementUpdated(el);

  //   expect(input2.value).to.equal('04/09/202');

  //   el.valueEnd = undefined;

  //   await elementUpdated(el);

  //   expect(input2.value).to.equal('');
  // });

  // it('render correct number of calendars without the range attribute in desktop', async () => {
  //   //
  // });

  // it('render correct number of calendars with the range attribute in desktop', async () => {
  //   //
  // });

  // it('render correct number of calendars in the mobile layout', async () => {
  //   //
  // });

  // it('render correct number of calendars with minDate and maxDate', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker range minDate="03/04/2023" maxDate="05/05/2023"></auro-datepicker>
  //   `);

  //   const calendar = el.shadowRoot.querySelector('auro-calendar');

  //   await expect(calendar.numCalendars).to.equal(3);
  // });

  it('handlePrevMonth changes current calendar month', async () => {
    const el = await fixture(html`
      <auro-datepicker range value="04/05/2023"></auro-datepicker>
    `);

    const calendar = el.shadowRoot.querySelector('auro-calendar');

    calendar.handlePrevMonth();

    await elementUpdated(el);

    await expect(calendar.month).to.equal(3);

    calendar.month = 1;

    calendar.handlePrevMonth();

    await elementUpdated(el);

    await expect(calendar.month).to.equal(12);
  });

  it('handleNextMonth changes current calendar month', async () => {
    const el = await fixture(html`
      <auro-datepicker range value="04/05/2023"></auro-datepicker>
    `);

    const calendar = el.shadowRoot.querySelector('auro-calendar');

    calendar.handleNextMonth();

    await elementUpdated(el);

    await expect(calendar.month).to.equal(5);

    calendar.month = 12;

    calendar.handleNextMonth();

    await elementUpdated(el);

    await expect(calendar.month).to.equal(1);
  });
});

function setInputValue(auroInput, value) {
  auroInput.value = value;
}

function getInput(el, index) {
  return [...el.shadowRoot.querySelectorAll('auro-input')][index];
}
