/*
-Declarar un arreglo que represente los asientos del avión
-Declaramos cada lugae con false que significa que los asientos
 estan vacios
-true representa un asiento ocupado
*/

var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

//Contador de asientos ocupados
var busySeats = 0;

//Función que pinte los asientos en el html
var paintSeals = function(array){
  var containerSeats = document.getElementById("seats");
  for(var i=0; i<array.length; i++){
    var seat = document.createElement("div");
    seat.className ="seats";
  }
}
