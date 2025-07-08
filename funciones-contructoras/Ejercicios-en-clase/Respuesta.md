// ============================================
// SOLUCIÓN COMPLETA - SISTEMA DE REVIEWS
// ============================================

// Parte 1: Review Base
function Review(rating, comment, reviewerName) {
    this.rating = rating;
    this.comment = comment;
    this.reviewerName = reviewerName;
    this.date = new Date();
    this.isVerified = false;
}

Review.prototype.markAsVerified = function() {
    this.isVerified = true;
    return `Review de ${this.reviewerName} marcado como verificado`;
};

Review.prototype.getInfo = function() {
    const stars = '⭐'.repeat(this.rating);
    return `${stars} por ${this.reviewerName}: '${this.comment}'`;
};

// Parte 2: ProductReview hereda de Review
function ProductReview(rating, comment, reviewerName, productName) {
    Review.call(this, rating, comment, reviewerName);
    this.productName = productName;
}

ProductReview.prototype = Object.create(Review.prototype);
ProductReview.prototype.constructor = ProductReview;

ProductReview.prototype.getInfo = function() {
    const stars = '⭐'.repeat(this.rating);
    return `${stars} para ${this.productName} por ${this.reviewerName}: '${this.comment}'`;
};

// ServiceReview hereda de Review
function ServiceReview(rating, comment, reviewerName, serviceName, provider) {
    Review.call(this, rating, comment, reviewerName);
    this.serviceName = serviceName;
    this.provider = provider;
}

ServiceReview.prototype = Object.create(Review.prototype);
ServiceReview.prototype.constructor = ServiceReview;

ServiceReview.prototype.getServiceInfo = function() {
    return `Servicio: ${this.serviceName} por ${this.provider} - Rating: ${this.rating}/5`;
};

// Parte 3: Sistema de Reviews
function ReviewSystem() {
    this.reviews = [];
    this.stats = {
        total: 0,
        totalRating: 0,
        verified: 0,
        ratingCount: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    };
}

ReviewSystem.prototype.addReview = function(review) {
    // Validar rating
    if (review.rating < 1 || review.rating > 5) {
        return 'Error: Rating debe estar entre 1 y 5';
    }
    
    // Agregar review
    this.reviews.push(review);
    
    // Actualizar estadísticas
    this.stats.total++;
    this.stats.totalRating += review.rating;
    this.stats.ratingCount[review.rating]++;
    
    if (review.isVerified) {
        this.stats.verified++;
    }
    
    return `Review agregado. Total: ${this.stats.total}`;
};

ReviewSystem.prototype.getAverageRating = function() {
    if (this.stats.total === 0) return 0;
    return (this.stats.totalRating / this.stats.total).toFixed(1);
};

ReviewSystem.prototype.getReviewsByRating = function(rating) {
    return this.reviews.filter(review => review.rating === rating);
};

ReviewSystem.prototype.getStats = function() {
    return {
        total: this.stats.total,
        average: parseFloat(this.getAverageRating()),
        verified: this.stats.verified,
        ratings: this.stats.ratingCount
    };
};

// ============================================
// PRUEBAS COMPLETAS
// ============================================

console.log('🌟 Sistema de Reviews - Pruebas');
console.log('='.repeat(40));

// Crear sistema
const reviewSystem = new ReviewSystem();

// Crear reviews
const review1 = new ProductReview(5, "Excelente calidad", "Ana", "iPhone 15");
const review2 = new ProductReview(4, "Muy bueno pero caro", "Luis", "iPhone 15");
const review3 = new ServiceReview(3, "Regular, tardaron mucho", "María", "Delivery", "UberEats");
const review4 = new ProductReview(5, "Perfecto!", "Carlos", "AirPods");

// Marcar como verificado
console.log(review1.markAsVerified());

// Agregar al sistema
console.log(reviewSystem.addReview(review1));
console.log(reviewSystem.addReview(review2));
console.log(reviewSystem.addReview(review3));
console.log(reviewSystem.addReview(review4));

console.log('\n📋 Información de Reviews:');
console.log(review1.getInfo());
console.log(review2.getInfo());
console.log(review3.getServiceInfo());

console.log('\n📊 Estadísticas:');
console.log('Rating promedio:', reviewSystem.getAverageRating());
console.log('Reviews con 5 estrellas:', reviewSystem.getReviewsByRating(5).length);
console.log('Stats completas:', reviewSystem.getStats());

// Pruebas adicionales
console.log('\n🔍 Pruebas adicionales:');

// Probar rating inválido
const reviewMalo = new ProductReview(6, "Test", "Test", "Test");
console.log(reviewSystem.addReview(reviewMalo));

// Reviews por rating
console.log('Reviews de 4 estrellas:', reviewSystem.getReviewsByRating(4).map(r => r.reviewerName));

console.log('\n✅ Todas las pruebas completadas!');