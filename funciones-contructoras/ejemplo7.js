function Animal(nombre, energia) {
  // const this = Object.create(Animal.prototype)

  this.nombre = nombre;
  this.energia = energia;

  // return this
}

Animal.prototype.comer = function (cantidad) {
  console.log(`${this.nombre} está comiendo.`);
  this.energia += cantidad;
};

const leo = new Animal("Leo", 7);
const lazy = new Animal("Lazy", 10);

console.log(leo);
console.log(leo.comer(12))
console.log(lazy)
