import { fixture, html, expect, elementUpdated, waitUntil } from '@open-wc/testing';
import '../index.js';
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

  it('can programmatically apply focus to input', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    const input = el.shadowRoot.querySelector('auro-input');

    el.focus();

    await expect(el.shadowRoot.activeElement).to.be.equal(input);
  });

  it('opens the bib when clicking on the dropdown trigger', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    const input = el.shadowRoot.querySelector('auro-input');
    input.click();

    const dropdown = el.shadowRoot.querySelector('auro-dropdown');

    await expect(dropdown.isPopoverVisible).to.be.true;
  });

  it('handles the required state being set', async () => {
    const el = await fixture(html`
      <auro-datepicker required></auro-datepicker>
    `);

    await expect(el.hasAttribute('validity')).to.be.false;

    el.focus();
    el.blur();

    await elementUpdated(el);

    await expect(el.getAttribute('validity')).to.be.equal('valueMissing');
  });

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

  //   const input = getInput(el, 0);

  //   input.focus();

  //   setInputValue(input, "01/01/2022");

  //   input.blur();

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('valid');

  //   // setInputValue(input, "01/02/2022");

  //   // await elementUpdated(el);

  //   // await expect(el.getAttribute('validity')).to.be.equal('rangeOverflow');
  // });

  // it('respects maxDate setting on second input', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker range maxDate="01/01/2022"></auro-datepicker>
  //   `);

  //   setInputValue(el, "01/01/2022");

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('valid');

  //   setInputValue(el, "01/02/2022");

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

  //   setInputValue(el, "01/02/2022");

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('valid');

  //   setInputValue(el, "01/01/2021");

  //   await elementUpdated(el);

  //   await expect(el.getAttribute('validity')).to.be.equal('rangeUnderflow');
  // });

  // it('resets datepicker when minDate is at a later date than current value', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker></auro-datepicker>
  //   `);

  //   el.value = '03/02/2023';

  //   await elementUpdated(el);

  //   el.minDate = '03/09/2023';

  //   await elementUpdated(el);

  //   await expect(el.value).to.be.equal(undefined);
  // });

  // it('updates centralDate when minDate is later than centralDate', async () => {
  //   const el = await fixture(html`
  //     <auro-datepicker value="03/02/2023"></auro-datepicker>
  //   `);

    // el.centralDate = '03/02/2023';

    // await elementUpdated(el);

    // el.minDate = '03/09/2023';

    // await elementUpdated(el);

    // await expect(el.value).to.be.equal(undefined);
  // });

  it('removing error attribute reruns validity even when value is undefined', async () => {
    const el = await fixture(html`
      <auro-datepicker error="custom error message"></auro-datepicker>
    `);

    await expect(el.getAttribute('validity')).to.be.equal('customError');

    el.removeAttribute('error');

    await elementUpdated(el);

    await expect(el.hasAttribute('validity')).to.be.false;
  });

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
});

function setInputValue(auroInput, value) {
  // const auroInput = el.shadowRoot.querySelector('auro-input');
  // const input = auroInput.shadowRoot.querySelector('input');

  // input.value = value;
  // input.dispatchEvent(new InputEvent('input'));

  auroInput.value = value;
  // auroInput.dispatchEvent(new Event('input', {bubbles:true}));
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  date = new Date(date);
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

function getInput(el, index) {
  return [...el.shadowRoot.querySelectorAll('auro-input')][index];
}
