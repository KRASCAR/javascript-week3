// PASO 1 : Crear funcion Constructora
function Contador(valor) {
  let contador = { valor: valor || 0 };

  return contador;
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

const miContador = new Contador();

// (**) punto de control para el diagrama VV

miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
console.log(miContador.mostrarValor()); // Debería imprimir: 3

// miContador.decrementar();
// console.log(miContador.mostrarValor()); // Debería imprimir: 2

// miContador.reset();
// console.log(miContador.mostrarValor()); // Debería imprimir: 0
