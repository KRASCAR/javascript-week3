// ¿que pasaria si tuviera que crear varios animales ?

// tengo que encontrar la forma mas efectiva de crearlos , para que NO repitamos codigo

// Instanciación Funcional con Métodos Compartidos
const funciones_vitales = {
  comer(cantidad) {
    console.log(`${this.nombre} esta comiendo...`);
    this.energia += cantidad;
  },
  dormir(tiempo) {
    console.log(`${this.nombre} está durmiendo...`);
    this.energia += tiempo;
  },
  jugar(tiempo) {
    console.log(`${this.nombre} esta jugando...`);
    this.energia -= tiempo;
  },
};

// quiero que esta funcion "Animal"
// sea la encargada de cerar nuevos animales
function Animal(nombre, energia) {
  let animal = {};

  animal.nombre = nombre;
  animal.energia = energia;

  animal.comer = funciones_vitales.comer;
  animal.dormir = funciones_vitales.dormir;
  animal.jugar = funciones_vitales.jugar;

  return animal;
}

const animal_1 = Animal("perro", 100); // nueva instancia
const animal_2 = Animal("tortuga", 50); // nueva instancia
const animal_3 = Animal("panda", 80); // nueva instancia
console.log(animal_1);
console.log(animal_2);
console.log(animal_3);
