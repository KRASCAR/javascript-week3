function Persona(nombre) {
  this.nombre = nombre;
}

// Agregamos un método al prototype
Persona.prototype.saludar = function () {
  console.log("Hola, soy " + this.nombre);
};

// Mostramos el prototype en consola
console.log(Persona.prototype);
