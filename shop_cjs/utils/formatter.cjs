const formatter = {
  formatPrice(price) {
    return `$${price.toFixed(2)}`;
  },

  formatDate(date) {
    return new Date(date).toLocaleDateString('en-US');
  }
};

module.exports = formatter;
