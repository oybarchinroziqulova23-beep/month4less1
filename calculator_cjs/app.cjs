const { add, sub, mult, div } = require("./operations.cjs");
const { PI,E,GOLDEN_RATIO } = require("./constant.cjs");

console.log(`2+3=${add(2,3)};`);
console.log(`2*3=${mult(2,3)};`);
console.log(`2-3=${sub(3,2)};`);
console.log(`2/3=${div(3,2)};`);
console.log(PI)
console.log(E)
console.log(GOLDEN_RATIO)