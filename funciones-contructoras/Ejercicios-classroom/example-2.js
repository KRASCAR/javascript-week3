// Ejercicio de la Receta: EJEMPLO 

function Receta() {
  // completar
}
 
// Receta.prototype... (completar)
 
const pastelDeChocolate = new Receta("Pastel de Chocolate", "Harina, Chocolate, Azúcar, Huevos", "Mezclar ingredientes y hornear a 180°C por 30 minutos.");
 
// (**) punto de control para diagrama VV
 
console.log(pastelDeChocolate.mostrarReceta());
// Debería imprimir: 
// Título de la receta: Pastel de Chocolate
// Ingredientes: Harina, Chocolate, Azúcar, Huevos
// Instrucciones: Mezclar ingredientes y hornear a 180°C por 30 minutos.
 
pastelDeChocolate.cambiarTitulo("Super Pastel de Chocolate");
pastelDeChocolate.añadirIngrediente("Vainilla");
pastelDeChocolate.editarInstrucciones("Mezclar ingredientes, añadir un toque de amor y hornear a 180°C por 35 minutos.");
 
console.log(pastelDeChocolate.mostrarReceta());
// Debería imprimir:
// Título de la receta: Super Pastel de Chocolate
// Ingredientes: Harina, Chocolate, Azúcar, Huevos, Vainilla
// Instrucciones: Mezclar ingredientes, añadir un toque de amor y hornear a 180°C por 35 minutos.
