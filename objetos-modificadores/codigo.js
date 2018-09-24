var persona = { nombre: "Jhon", id: 123456 };

var mostrar = document.getElementById("mostrar");

mostrar.textContent = persona.nombre;

//Modificador 
// ...[...] = ...

persona["ciudad"] = 'Bogotá';

// Forma Corta:
persona.cargo = "Diseñador";

//Eliminar una propiedad 
delete persona["id"];

persona["nombre"]= "Yen";


