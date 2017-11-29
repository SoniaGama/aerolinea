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
  //selector fuera de for
  var containerSeats = document.getElementById('seats');
  for (var i=0; i<array.length; i++){
    //el array que llega como parametro se utiliza para pintar el DOM
    var seat = document.createElement('div');
    seat.className ='seats';
    //los primeros 4 asientos seran purple para la primera clase
    if (i<4){
      seat.style.background='purple';
    }else{
      //los asientos de cñase economica seran amarillos
      seat.style.background=yellow;
    }
    //appendChild agrega los divs a cada asiento en el contenedor
    containerSeats.appendChild(seat);
  }
};

var reserve = function() {
  var button = document.getElementById('button');
  button.addEventListener('click', choooseZone);
};

var choooseZone = function(){
  var choice = prompt(
    'En que zona quieres resrvar tu asiento: \n 1.Primera clase \n 2.Economica \n \n Selecciona un número con tu elección');
 if(choice == 1){
   checkFirstClassZone();
 }else if (choice == 2){
   checkEconomicZone();
 }else{
   alert('Ingresa un número valido');
 }
};

var checkFirstClassZone = function(){
  var zone = 'Primera Clase';
//recorremos los aswientos de 1 al 4
for(var infdex = 0; index <4; index++){
  if(airlineSeats[index]==false){
    airlineSeats[index]=true;
    //esta funcion indicara graficamente nuetros asientos reservados
    reserveSeat(index);
    //la funcion paiontTicket se encarga de pintar los tckets en el DOM
    paintTicket(index, zone);
    //incrementamos en uno nuestro rastreador de asientos ocupados
    busySeats++;
    //al reservar salimos del recorrido
    break;
  }else if (index==3&&airlineSeats[index]==true){
    reasignEconomicZone(zone);
  }
 }
};

var checkEconomicZone = funcion(){
  var zone = 'Clase Economica';
  //recorremos los asientos de la clase Economica 5-10
  for(var index = 4; index<10; index++){
    if(airlineSeats[index]==false){
      airlineSeats[index]=true;
      //indica graficamente los asientos reservados
      reserveSeat[index];
      //la funcion que sigue pinta los tockets
      paintTicket(index, zone);
      //incrementamos en uno nuestro rastreador
      busySeats++;
      //salimos del recorrido
      break;
    }else if (index == 9 && airlineSeats[index]==true{
      reasignFirstZone(zone);
    }
  }
};

var reserveSeat=funcion(indexToPaint){
  var seat = document.getElementByClassName('seats');
  seat[indexToPaint].textContent = 'ocupado';
};

var reasignEconomicZone = funcion(zone){
  //si nuestro contador de rastreo es igual a 10 indicar al usuario
  if(busySeats==10){
    noSeats();
    nextFlight();
  }else{
    var reasign = confirm('ya no quedan asientos '+zone+ '\n Quieres reservar en clase Economica');
    if(reasign==true){
      checkEconomicZone();
    }else{
      nextFlight();
    }
  }
};

var reasignFirstClasssZone = funcion(zone){
  //si  el contador es igual a 10 indicarle al usuario
  if(busySeats==10){
    noSeats();
    nextFlight();
  }else{
    var reasign = confirm('ya no quedan asientos '+zone+ '\n Quieres reservar en clase Economica');
    if(reasign==true){
      checkEconomicZone();
    }else{
      nextFlight();
    }
  }
};

var paintTicket = function(index, zone){
  //para imprimir el pase de asbordar creamos div dinamicamente
  var containerTickets = document.getElementById('tickets');
  var ticket = document.createElement('div');
  ticket.className = 'tickets';
  var title = document.createElement('p');
  var reserveSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'Pase de abordar';
  reserveSeating.textContent = 'no. de asiento '+(index+1);
  zoneClass.textContent = 'Clase' + zone;
  ticket.appendChild(title);
  ticket.appendChild(reserveSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
};

var noSeats = function (){
  alert('Lo sentimos ya no hay asientos disponibles');
};

var nextFlight = function(){
  alert('proximo vuelo en 3 hrs.');
};

paintSeals(airlineSeats);
reserve();
