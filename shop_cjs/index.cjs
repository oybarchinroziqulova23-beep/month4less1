const Product = require('./models/product.cjs');
const Cart = require('./models/cart.cjs');
const calculator = require('./utils/calculator.cjs');
const formatter = require('./utils/formatter.cjs');

const p1 = new Product('Non', 5000, 10);
const p2 = new Product('Sut', 7000, 5);
const p3 = new Product('Shakar', 12000, 0);

const cart = new Cart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);

console.log("Savatdagi mahsulotlar soni:", cart.getItemCount());
console.log("Jami summa (chegirma bilan):", formatter.formatPrice(cart.getTotal(calculator)));
console.log("Qo'shilgan sana:", formatter.formatDate(Date.now()));
