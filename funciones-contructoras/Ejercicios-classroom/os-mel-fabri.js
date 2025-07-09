function Receta(titulo, ingredientes, instrucciones) {
  // completar
    this.titulo = titulo;
    this.ingredientes = ingredientes;
    this.instrucciones = instrucciones;
}

// Receta.prototype... (completar)
Receta.prototype.mostrarReceta = function() {
    return `Titulo de la receta: ${this.titulo} \n Ingredientes: ${this.ingredientes} \n Instrucciones: ${this.instrucciones}`;
};

Receta.prototype.añadirIngrediente = function(ingrediente) {
    if (!this.ingredientes.trim() === " ") {
        this.ingredientes += `, ${ingrediente}`;
    }else{
        this.ingredientes = ingrediente;
    }
};

Receta.prototype.cambiarTitulo = function(nuevoTitulo) {
    this.titulo = nuevoTitulo;
}

Receta.prototype.editarInstrucciones = function(nuevasInstrucciones) {
    this.instrucciones = nuevasInstrucciones;
}

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