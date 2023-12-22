export function populateSlotContentExample() {
  const populateSlotContentExample = document.querySelector('#slotContentExample');

  // Array of object(s) containing key, value pairs defining what slot content to render
  const data = [
    {slot: 'date', month: 12, day: 10, year: 2023, content: '$89'},
    {slot: 'date', month: 12, day: 11, year: 2023, content: '$100'},
    {slot: 'date', month: 12, day: 12, year: 2023, content: '$2345'},
    {slot: 'date', month: 12, day: 13, year: 2023, content: '$560'},
    {slot: 'date', month: 12, day: 14, year: 2023, content: 'Sold'},
    {slot: 'date', month: 12, day: 15, year: 2023, content: 'Sold'},
    {slot: 'date', month: 12, day: 16, year: 2023, content: 'Sold'},
    {slot: 'popover', month: 12, day: 10, year: 2023, content: 'Tickets for this date are $89'},
    {slot: 'popover', month: 12, day: 11, year: 2023, content: 'Tickets for this date are $100'},
    {slot: 'popover', month: 12, day: 12, year: 2023, content: 'Tickets for this date are $2345'},
    {slot: 'popover', month: 12, day: 13, year: 2023, content: 'Tickets for this date are $560'},
    {slot: 'popover', month: 12, day: 14, year: 2023, content: 'Tickets for this date are sold out'},
    {slot: 'popover', month: 12, day: 15, year: 2023, content: 'Tickets for this date are sold out'},
    {slot: 'popover', month: 12, day: 16, year: 2023, content: 'Tickets for this date are sold out'}
    
  ];

  // For each item in the array, parse the keys into an HTML element and insert it into the DOM
  data.forEach((item) => {

    // Create the new element for the slot content
    const slotElement = document.createElement('span');

    // Create the slot name from the item's keys
    const slotName = `${item.slot}_${item.month}_${item.day}_${item.year}`;

    // Set the slot name and content
    slotElement.setAttribute('slot', slotName);
    slotElement.textContent = item.content;

    // Append the new element to the DOM
    populateSlotContentExample.appendChild(slotElement);
  });
}
