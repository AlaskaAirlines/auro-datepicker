import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-datepicker.js';
import '@aurodesignsystem/auro-calendar';
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

    el.focus();
    el.blur();

    let hasError = el.hasAttribute('error');

    await expect(hasError).to.be.true;

    setInputValue(el, '01/01/2022');

    hasError = el.hasAttribute('error');

    await expect(hasError).to.be.false;
  });

  it('can preset a value', async () => {
    const el = await fixture(html`
      <auro-datepicker value="01/01/2022"></auro-datepicker>
    `);

    const calendar = el.shadowRoot.querySelector('auro-calendar');
    const input = el.shadowRoot.querySelector('auro-input');

    const setDate = new Date('01/01/2022').toDateString();
    const calDate = new Date(calendar.selectedDate).toDateString();
    const inputDate = new Date(input.value).toDateString();

    await expect(calDate).to.be.equal(setDate);
    await expect(inputDate).to.be.equal(setDate);
  });

  it('respects maxDate setting', async () => {
    const el = await fixture(html`
      <auro-datepicker maxDate="01/01/2022"></auro-datepicker>
    `);

    setInputValue(el, "01/01/2022");
    let hasError = el.hasAttribute('error');

    await expect(hasError).to.be.false;

    setInputValue(el, "01/02/2022");
    hasError = el.hasAttribute('error');

    await expect(hasError).to.be.true;
  });

  it('respects minDate setting', async () => {
    const el = await fixture(html`
      <auro-datepicker minDate="01/02/2022"></auro-datepicker>
    `);

    setInputValue(el, "01/02/2022");
    let hasError = el.hasAttribute('error');

    await expect(hasError).to.be.false;

    setInputValue(el, "01/01/2021");
    hasError = el.hasAttribute('error');

    await expect(hasError).to.be.true;
  });

  it('handles setting date by clicking on date in calendar', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    const input = el.shadowRoot.querySelector('auro-input');
    input.click();

    const calendar = el.shadowRoot.querySelector('auro-calendar');
    const dates = calendar.shadowRoot.querySelectorAll('.calendar__day-button');

    dates[7].click();

    const calDate = formatDate(calendar.selectedDate);
    const thisDate = formatDate(el.value);

    await expect(thisDate).to.be.equal(calDate)
  });
});

function setInputValue(el, value) {
  const auroInput = el.shadowRoot.querySelector('auro-input');
  const input = auroInput.shadowRoot.querySelector('input');

  input.value = value;
  input.dispatchEvent(new InputEvent('input'));
  auroInput.dispatchEvent(new Event('input', {bubbles:true}));
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
