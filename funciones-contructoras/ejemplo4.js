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

let animal = {};
animal.__proto__ = funciones_vitales;

console.log(animal.comer(10))
