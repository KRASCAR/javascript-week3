// aqui van ejemplos
let animal = {}; // este es un objeto vacio

animal.nombre = "gato";
animal.especie = "felino";
animal.energia = 10;

animal.comer = function (cantidad) {
  console.log(`${this.nombre} esta comiendo...`);
  this.energia += cantidad;
};

animal.dormir = function (tiempo) {
  console.log(`${this.nombre} está durmiendo...`);
  this.energia += tiempo;
};

animal.jugar = function (tiempo) {
  console.log(`${this.nombre} esta jugando...`);
  this.energia -= tiempo;
};
