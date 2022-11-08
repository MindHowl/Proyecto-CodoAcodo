const valorTicket = 200;
const descuentoEstudiante = 0.80;
const descuentoTrainee = 0.50;
const descuentoJunior = 0.15;

let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");
let totalValorTickets = 0;

function calculo() {
  if (totalValorTickets > 0) {
    totalValorTickets = 0;
  }
  totalValorTickets = cantidadTickets.value * valorTicket;
  if (categoria.value == 0) {
    totalValorTickets;
  } else if (categoria.value == 1) {
    totalValorTickets = totalValorTickets - (totalValorTickets * descuentoEstudiante);
  } else if (categoria.value == 2) {
    totalValorTickets = totalValorTickets - (totalValorTickets * descuentoTrainee);
  } else if (categoria.value == 3) {
    totalValorTickets = totalValorTickets - (totalValorTickets * descuentoJunior);
  } 
  totalPago.innerHTML = totalValorTickets;
  
}
btnResumen.addEventListener("click", calculo);

function reset() {
  totalValorTickets = 0;
  totalPago.innerHTML = totalValorTickets;
}
btnBorrar.addEventListener("click", reset);