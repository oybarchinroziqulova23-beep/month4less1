const calculator = {
  calculateTax(amount, taxRate = 12) {
    return amount + (amount * taxRate / 100);
  },

  calculateDiscount(price, discount) {
    return price - (price * discount / 100);
  }
};

module.exports = calculator;
