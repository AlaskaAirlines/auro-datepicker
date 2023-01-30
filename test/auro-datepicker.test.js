import { fixture, html, expect, elementUpdated, waitUntil } from '@open-wc/testing';
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

  it('respects maxDate setting', async () => {
    const el = await fixture(html`
      <auro-datepicker maxDate="01/01/2022"></auro-datepicker>
    `);

    setInputValue(el, "01/01/2022");

    await elementUpdated(el);

    await expect(el.getAttribute('validity')).to.be.equal('valid');

    setInputValue(el, "01/02/2022");

    await elementUpdated(el);

    await expect(el.getAttribute('validity')).to.be.equal('rangeOverflow');
  });

  it('resets datepicker when maxDate is at an earlier date than current value', async () => {
    const el = await fixture(html`
      <auro-datepicker></auro-datepicker>
    `);

    el.value = '03/02/2023';

    await elementUpdated(el);

    el.maxDate = '02/26/2023';

    await elementUpdated(el);

    await expect(el.value).to.be.equal(undefined);
  });

  it('respects minDate setting', async () => {
    const el = await fixture(html`
      <auro-datepicker minDate="01/02/2022"></auro-datepicker>
    `);

    setInputValue(el, "01/02/2022");

    await elementUpdated(el);

    await expect(el.getAttribute('validity')).to.be.equal('valid');

    setInputValue(el, "01/01/2021");

    await elementUpdated(el);

    await expect(el.getAttribute('validity')).to.be.equal('rangeUnderflow');
  });

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

  it('removing error attribute reruns validity even when value is undefined', async () => {
    const el = await fixture(html`
      <auro-datepicker error="custom error message"></auro-datepicker>
    `);

    await waitUntil(() => el.ready);

    await expect(el.getAttribute('validity')).to.be.equal('customError');

    el.removeAttribute('error');

    await elementUpdated(el);

    await expect(el.hasAttribute('validity')).to.be.false;
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
