export function populateSlotContentExample() {
  const populateSlotContentExample = document.querySelector('#slotContentExample');

  // Insert slot content when the datepicker has been opened
  populateSlotContentExample.addEventListener('auroDatePicker-toggled', (event) => {
    if (event.detail.expanded) {
      // Array of object(s) containing key, value pairs defining what slot content to render
      const data = [
        {slot: 'date', month: 12, day: 1, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 2, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 3, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 4, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 5, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 6, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 7, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 8, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 9, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 10, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 11, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 12, year: 2023, content: 'Sold'},
        {slot: 'date', month: 12, day: 13, year: 2023, content: '$560'},
        {slot: 'date', month: 12, day: 14, year: 2023, content: '$89', highlight: true},
        {slot: 'date', month: 12, day: 15, year: 2023, content: '$100'},
        {slot: 'date', month: 12, day: 16, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 17, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 18, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 19, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 20, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 21, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 22, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 23, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 24, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 25, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 26, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 27, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 28, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 29, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 30, year: 2023, content: '$2345'},
        {slot: 'date', month: 12, day: 31, year: 2023, content: '$2345'},
        {slot: 'date', month: 1, day: 14, year: 2024, content: '$83', highlight: true},
        {slot: 'date', month: 1, day: 15, year: 2024, content: '$203'},
        {slot: 'date', month: 1, day: 16, year: 2024, content: '$4444'},
        {slot: 'date', month: 1, day: 17, year: 2024, content: '$83', highlight: true},
        {slot: 'date', month: 1, day: 18, year: 2024, content: '$96', highlight: true},
        {slot: 'date', month: 1, day: 19, year: 2024, content: 'Sold'},
        {slot: 'date', month: 1, day: 20, year: 2024, content: 'Sold'},
        {slot: 'popover', month: 12, day: 1, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 2, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 3, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 4, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 5, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 6, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 7, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 8, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 9, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 10, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 11, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 12, year: 2023, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 12, day: 13, year: 2023, content: 'Tickets for this date are $560'},
        {slot: 'popover', month: 12, day: 14, year: 2023, content: 'Tickets for this date are $89'},
        {slot: 'popover', month: 12, day: 15, year: 2023, content: 'Tickets for this date are $100'},
        {slot: 'popover', month: 12, day: 16, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 17, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 18, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 19, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 20, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 21, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 22, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 23, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 24, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 25, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 26, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 27, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 28, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 29, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 30, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 12, day: 31, year: 2023, content: 'Tickets for this date are $2345'},
        {slot: 'popover', month: 1, day: 14, year: 2024, content: 'Tickets for this date are $83'},
        {slot: 'popover', month: 1, day: 15, year: 2024, content: 'Tickets for this date are $203'},
        {slot: 'popover', month: 1, day: 16, year: 2024, content: 'Tickets for this date are $4444'},
        {slot: 'popover', month: 1, day: 17, year: 2024, content: 'Tickets for this date are $83'},
        {slot: 'popover', month: 1, day: 18, year: 2024, content: 'Tickets for this date are $96'},
        {slot: 'popover', month: 1, day: 19, year: 2024, content: 'Tickets for this date are sold out'},
        {slot: 'popover', month: 1, day: 20, year: 2024, content: 'Tickets for this date are sold out'}
      ];

      // For each item in the array, parse the keys into an HTML element and insert it into the DOM
      data.forEach((item) => {
        // Create the new element for the slot content
        const slotElement = document.createElement('span');

        if (item.month.toString().length === 1) {
          item.month = `0` + item.month;
        }

        if (item.day.toString().length === 1) {
          item.day = `0` + item.day;
        }

        // Create the slot name from the item's keys
        const slotName = `${item.slot}_${item.month}_${item.day}_${item.year}`;

        // Set the slot name and content
        slotElement.setAttribute('slot', slotName);
        slotElement.textContent = item.content;

        // Set the 'highlight' attribute on date slot content
        if (item.slot === 'date' && item.highlight) {
          slotElement.setAttribute('highlight', item.highlight);
        }

        // Append the new element to the DOM
        populateSlotContentExample.appendChild(slotElement);
      });
    }

    populateSlotContentExample.pushSlotContent();
  });
}
