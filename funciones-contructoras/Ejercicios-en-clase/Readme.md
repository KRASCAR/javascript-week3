# Ejercicio: Sistema de Reviews como Uber/Amazon 🌟

## 🎯 Contexto Real
Tu startup quiere implementar un sistema de reviews como **Uber, Amazon o Airbnb**. Los usuarios pueden dejar reviews a productos, servicios o conductores, y necesitas calcular ratings promedio.

## 📝 Lo que tienes que implementar

### Parte 1: Review Base
```javascript
// TODO: Crear constructor para Review
function Review(rating, comment, reviewerName) {
    // rating: número del 1 al 5
    // comment: texto del comentario
    // reviewerName: nombre de quien hace el review
    // date: fecha automática
    // isVerified: false por defecto
}

// TODO: Método para marcar review como verificado
Review.prototype.markAsVerified = function() {
    // Cambiar isVerified a true
    // Retornar mensaje de confirmación
};

// TODO: Método para obtener información del review
Review.prototype.getInfo = function() {
    // Retornar string: "⭐⭐⭐⭐⭐ por Juan: 'Excelente servicio'"
};
```

### Parte 2: Diferentes tipos de Reviews
```javascript
// TODO: ProductReview hereda de Review
function ProductReview(rating, comment, reviewerName, productName) {
    // Llamar constructor padre
    // Agregar productName
}

// TODO: Establecer herencia correctamente
// ProductReview.prototype = ???

// TODO: Sobrescribir getInfo para incluir el producto
ProductReview.prototype.getInfo = function() {
    // "⭐⭐⭐⭐⭐ para [producto] por Juan: 'Excelente calidad'"
};

// TODO: ServiceReview hereda de Review  
function ServiceReview(rating, comment, reviewerName, serviceName, provider) {
    // Llamar constructor padre
    // Agregar serviceName y provider
}

// TODO: Establecer herencia
// ServiceReview.prototype = ???

// TODO: Método específico para services
ServiceReview.prototype.getServiceInfo = function() {
    // "Servicio: [serviceName] por [provider] - Rating: X/5"
};
```

### Parte 3: Sistema de Reviews
```javascript
// TODO: ReviewSystem para gestionar todo
function ReviewSystem() {
    // reviews: array para guardar todos los reviews
    // stats: objeto para estadísticas
}

// TODO: Agregar review al sistema
ReviewSystem.prototype.addReview = function(review) {
    // Verificar que rating esté entre 1 y 5
    // Agregar al array de reviews
    // Actualizar estadísticas
};

// TODO: Calcular rating promedio
ReviewSystem.prototype.getAverageRating = function() {
    // Calcular promedio de todos los ratings
    // Retornar número con 1 decimal
};

// TODO: Obtener reviews por rating
ReviewSystem.prototype.getReviewsByRating = function(rating) {
    // Filtrar reviews por rating específico
    // Retornar array de reviews
};

// TODO: Obtener estadísticas
ReviewSystem.prototype.getStats = function() {
    // Retornar objeto con:
    // - total de reviews
    // - rating promedio  
    // - reviews verificados
    // - reviews por cada rating (1-5)
};
```

## 🧪 Pruebas que debe pasar tu código

```javascript
// Crear sistema
const reviewSystem = new ReviewSystem();

// Crear reviews
const review1 = new ProductReview(5, "Excelente calidad", "Ana", "iPhone 15");
const review2 = new ProductReview(4, "Muy bueno pero caro", "Luis", "iPhone 15");
const review3 = new ServiceReview(3, "Regular, tardaron mucho", "María", "Delivery", "UberEats");

// Marcar como verificado
review1.markAsVerified();

// Agregar al sistema
reviewSystem.addReview(review1);
reviewSystem.addReview(review2);
reviewSystem.addReview(review3);

// Pruebas
console.log(review1.getInfo()); 
// "⭐⭐⭐⭐⭐ para iPhone 15 por Ana: 'Excelente calidad'"

console.log(reviewSystem.getAverageRating()); 
// 4.0

console.log(reviewSystem.getReviewsByRating(5).length); 
// 1

console.log(reviewSystem.getStats());
// { total: 3, average: 4.0, verified: 1, ratings: {1:0, 2:0, 3:1, 4:1, 5:1} }
```

## ✅ Entrega

**Crea un archivo `reviews.js` con:**
1. ✅ Las 3 funciones constructoras implementadas
2. ✅ Herencia correcta con `Object.create()`
3. ✅ Todos los métodos funcionando
4. ✅ Las pruebas pasando correctamente
5. ✅ Comentarios explicando tus decisiones

## 🎯 Conceptos que practicas

- **Constructores**: Propiedades específicas de cada tipo
- **Prototype**: Métodos compartidos entre instancias  
- **Herencia**: ProductReview y ServiceReview heredan de Review
- **Polimorfismo**: Sobrescribir `getInfo()` en clases hijas
- **Casos reales**: Sistema que usan millones de personas diariamente

## 💡 Pistas

- Recuerda usar `Review.call(this, ...)` en los constructores hijos
- Para las estrellas usa: `'⭐'.repeat(rating)`
- Para el promedio usa: `(suma / cantidad).toFixed(1)`
- `Object.create(Review.prototype)` para establecer herencia

## 🚀 Bonus (Opcional)

Si terminas rápido, agrega:
- Método para eliminar reviews
- Filtrar reviews por palabra clave en comentarios
- Calcular porcentaje de reviews positivos (4-5 estrellas)

---

**Tiempo estimado: 45-60 minutos**

¡Este es exactamente el tipo de código que escribirás en startups reales! 💪