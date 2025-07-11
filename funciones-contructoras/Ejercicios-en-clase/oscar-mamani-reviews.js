function Review(rating, comment, reviewerName) {
  this.rating = rating;
  this.comment = comment;
  this.reviewerName = reviewerName;
  this.date = new Date();
  this.isVerified = false;
}

Review.prototype.markAsVerified = function() {
  this.isVerified = true;
  return this.isVerified;
};

Review.prototype.getInfo = function() {
  return "⭐⭐⭐⭐⭐ por Juan: 'Excelente servicio'"
  
};

function ProductReview(rating, comment, reviewerName, productName) {
  Review.call(this, rating, comment, reviewerName);
  this.productName = productName;
};

ProductReview.prototype = Object.create(Review.prototype);

ProductReview.prototype.getInfo = function() {
  return `⭐⭐⭐⭐⭐ por ${this.productName} por Juan: excelente calidad`;
};

function ServiceReview(rating, comment, reviewerName, serviceName, provider) {
    Review.call(this, rating, comment, reviewerName);
    this.serviceName = serviceName;
    this.provider = provider;
}

ServiceReview.prototype = Object.create(Review.prototype);

ServiceReview.prototype.getServiceInfo = function() {
    return `Servicio: ${this.serviceName} por ${this.provider} - rating: ${this.rating}/5`
}

function ReviewSystem(){
    this.reviews = [];
    this.stats = {
        total: 0,
        average: 0,
        verified: 0,
        ratings: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
    };
}

ReviewSystem.prototype.addReview = function(review) {
     if (review.rating < 1 || review.rating > 5) {
    throw new Error("El rating debe estar entre 1 y 5");
  }

  // Agregar review al array
  this.reviews.push(review);

  // Actualizar contadores básicos
  this.stats.total++;
  this.stats.ratings[review.rating]++;

  if (review.isVerified) {
    this.stats.verified++;
  }
};

ReviewSystem.prototype.getAverageRating = function() {
  if (this.reviews.length === 0) return 0.0;

  const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
  return (sum / this.reviews.length).toFixed(1);
};

ReviewSystem.prototype.getReviewsByRating = function(rating) {
    return this.reviews.filter(review => review.rating === rating);
}

ReviewSystem.prototype.getStats = function() {
    return {
        total: this.stats.total,
        average: this.getAverageRating(),
        verified: this.stats.verified,
        ratings: this.stats.ratings
    };
};

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