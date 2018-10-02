/* 

TRY: capturar el código que vamos a probar.
CATCH: captura el error.
Throw: realizar excepciones.

(Err.stack)

*/

try {
    var a = Number(prompt("introduzca un número"));
    var b = Number(prompt("introduzca un Segundo número"));

    if(isNaN(a) || isNaN(b)){
        throw "El número es inválido";
    }

    alert("el resultado es: " + (a+b));

} catch (err) {
    alert("El error es: " + err);
}