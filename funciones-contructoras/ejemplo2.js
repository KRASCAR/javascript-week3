// ¿que pasaria si tuviera que crear varios animales ?

// tengo que encontrar la forma mas efectiva de crearlos , para que NO repitamos codigo

// quiero que esta funcion "Animal"
// sea la encargada de cerar nuevos animales
function Animal(nombre, energia) {
  let animal = {};

  animal.nombre = nombre;
  animal.energia = energia;

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

  return animal;
}

const animal_1 = Animal("perro", 100);
const animal_2 = Animal("tortuga", 50);
const animal_3 = Animal("panda", 80);
console.log(animal_1)
console.log(animal_2)
console.log(animal_3)
