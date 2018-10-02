/* 
FUNCIONES:
EJECUTA UN CÓDIGO / GRUPO DE INSTRUCCIONES (TAREAS ESPECÍFICAS) 
POR MEDIO DE UNA LLAMADA.

*/

function decirHola(nombre) {
    console.log(`Hola ${nombre}, ¿Cómo estás?`);
}

decirHola("Jhon");


//Funcion ANÓNIMA
//Sin nombre

var edad = function (numero) {
    console.log(`Tu edad es: ${numero}!`);
}

edad(25);

//RETURN
 function operacion(numA, numB) {
     return numA + numB;
 }

 console.log(`El resultado es: ${ operacion(3,4)}`);






