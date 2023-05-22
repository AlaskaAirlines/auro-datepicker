export function validityExample() {
  const validityExampleExample = document.querySelector('#validityExample');
  const validityExampleExampleBtn = document.querySelector('#validityExampleBtn');

  validityExampleExampleBtn.addEventListener('click', () => {
    console.warn('Validity set to:', validityExampleExample.validity);
    alert(`Validity set to: ${validityExampleExample.validity}`);
  })
}
