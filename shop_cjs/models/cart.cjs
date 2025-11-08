class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName) {
    this.products = this.products.filter(p => p.getName() !== productName);
  }

  getItemCount() {
    return this.products.length;
  }

  getTotal(calculator) {
    let total = 0;
    this.products.forEach(p => {
      total += calculator.calculateDiscount(p.getPrice(), p.getDiscount());
    });
    return total;
  }
}

module.exports = Cart;
