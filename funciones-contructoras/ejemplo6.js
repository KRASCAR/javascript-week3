//  Instanciación Prototípica.
// vamos a usar prototype

function Animal(nombre, energia) {
  let animal = Object.create(Animal.prototype);

  animal.nombre = nombre;
  animal.energia = energia;

  return animal;
}

Animal.prototype.comer = function (cantidad) {
  console.log(`${this.nombre} esta comiendo ...`);
  this.energia += cantidad;
};

Animal.prototype.dormir = function (duracion) {
  console.log(`${this.nombre} está durmiendo...`);
  this.energia += duracion;
};

Animal.prototype.jugar = function (duracion) {
  console.log(`${this.nombre} está jugando...`);
  this.energia -= duracion;
};

const animal_1 = Animal("perro", 100); // nueva instancia
const animal_2 = Animal("tortuga", 50); // nueva instancia
const animal_3 = Animal("panda", 80); // nueva instancia

animal_1.comer(100);
animal_2.dormir(2);
animal_3.jugar(12);

console.log("Forma 1, prototype: ", animal_1.prototype)

// Forma 2
const funcionesVitales = {
  comer() {},
  dormir(tiempo) {
    console.log(`${this.nombre} va a dormir ${tiempo} horas...`);
    return "esta durmiendo ...."
  },
  jugar() {},
};

function Animal2(nombre, energia) {
  let animal = Object.create(funcionesVitales);

  animal.nombre = nombre;
  animal.energia = energia;

  return animal;
}


const animal2_1 = Animal2("leon", 300);
const animal2_2 = Animal2("oso perezoso", 30);

console.log("////////////////////////////////////")
console.log("Forma 2 : ", animal2_1.prototype);
console.log("Forma 2 : ", animal2_1.dormir(12));
