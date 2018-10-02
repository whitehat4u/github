/* 
FUNCIONES:
EJECUTA UN CÓDIGO / GRUPO DE INSTRUCCIONES (TAREAS ESPECÍFICAS) 
POR MEDIO DE UNA LLAMADA.

innerHTML

*/

var nuevoTitulo = document.getElementById('titulo');
nuevoTitulo.innerHTML = "Cambio de Título";

//ARROWFUNCTIONS

//ASIGNO UNA VARIABLE = PARÁMETROS => { }; 

var textoNuevo = (val1, val2) => val1 + val2;


var parrafo = document.getElementById('texto');

parrafo.innerHTML = textoNuevo(3,3); 
