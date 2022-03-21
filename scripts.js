/*
function saludar(nombre){
    alert("Hola " + nombre);
}

saludar("Alberto");
saludar("Violeta");
saludar("Alfonso");
saludar("Abbi");
saludar("Omar");
function darHora(){
document.getElementById("d_time").innerHTML = Date();
}
*/

const horaYfechaActual = new Date();
const hora = horaYfechaActual.getHours(); // + ':' + horaYfechaActual.getMinutes();
const minutos = horaYfechaActual.getMinutes();
const fecha = horaYfechaActual.getDate();

//console.log(hora);
var saludo = "";
if(hora > 0 && hora <= 11){
    saludo="¡Buenos días!";
}
if(hora > 11 && hora <= 18){
    saludo="¡Buenas tardes!";
}
if(hora > 18 && hora <= 23){
    saludo="¡Buenas noches!";
}

function darHora(){
    document.getElementById("d_hora").innerHTML = "Son las " + hora + ":" + minutos;
}
function saludar(){
    document.getElementById("d_saludo").innerHTML = saludo;
}
function darFecha(){
    document.getElementById("d_fecha").innerHTML = fecha;
}

function borrarHora(){
    document.getElementById("d_hora").innerHTML = ""; 
}
function borrarSaludo(){
    document.getElementById("d_saludo").innerHTML = ""; 
}
function borrarFecha(){
    document.getElementById("d_fecha").innerHTML = ""; 
}
