export function monthNamesExample() {
  const monthNamesExample = document.querySelector('#monthNamesExample');
  const spanishMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  monthNamesExample.monthNames = spanishMonths;
}
