//PATRONES 
//Objetos
// exec / test -> Funcion RegExp
//match, replace, search y Split -> String

//Cómo se utilizan?
/*
12 -> \ . $ ^ | ? * + [] {}
*/

//COMO SE DEFINE?

//var miER = new RegExp("hola");

//forma corta
var miER = /hola/;

var cadena = "a ver si esta frase contiene un. hola en ella";
var titulo = document.getElementById("texto");

if(miER.test(cadena)){
    titulo.textContent = "Si existe";
}

//CREAR PATRONES
// ^ principio 
// $ final
//  \ omite el metacaracter
// .
// Cuantificadores: * + ?
//*  /ho*a/
//+ /ho+a/
//? /ho?a/

// | 
var expresion = /hola | adios/;

var expresion2 = /[mbs]ola/;
// mola, bola, sola
//[a-z][A-Z];
//{4}

var patron = /^[0-9]{3}-[0-9]{7}/

function validar() {
    var email = "^[a-z]+@[a-z]+\.[a-z]{2,4}";

    var resultado = new RegExp(email);
    
}