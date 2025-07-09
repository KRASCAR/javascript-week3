// PASO 1 : Crear funcion Constructora
function Contador(valor) {
  this.contador = valor || 0;
}

// PASO 2:  Extender el prototipo de Contador
Contador.prototype.incrementar = function () {
  console.log("Estamos aumentando el contador en 1");
  return (this.contador += 1);
};

Contador.prototype.decrementar = function () {
  console.log("Estamos decremnetando el contador en 1");
  return (this.contador -= 1);
};

Contador.prototype.reset = function () {
  console.log("regresamos el contador a 0");
  return (this.contador = 0);
};

Contador.prototype.mostrarValor = function () {
  return this.contador;
};

Contador.prototype.multiplicarX2 = function () {
  return this.contador * 2;
};

const listofFunciones = {
  incrementar: () => {
    return (this.contador += 1);
  },
  mostrarValor: () => {
    return this.contador;
  },
};

const miContador = new Contador();

// (**) punto de control para el diagrama VV
//console.log("que es mi contador ?????", miContador);
//console.log("que es mi contador Type of ?????", typeof miContador);

// miContador.__proto__ = listofFunciones;

miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
console.log(miContador.mostrarValor());

console.log("---------DATOS DE LA INSTANCIA -------");
console.log("Mi Contador solo: ", miContador);
console.log("Mi contador __proto__: ", miContador.__proto__);
console.log("que hay dentro??", Object.getPrototypeOf(miContador));
console.log("Mi contador , tiene prototype ????", miContador.prototype)

console.log("---------DATOS DE LA FUNCION CONSTRUCTORA -------");
console.log("Contador prototype ???: ", Contador.prototype);
// miContador.decrementar();
// console.log(miContador.mostrarValor()); // Debería imprimir: 2

// miContador.reset();
// console.log(miContador.mostrarValor()); // Debería imprimir: 0
