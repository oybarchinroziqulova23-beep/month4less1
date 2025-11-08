import Calculator, { add, subtract } from './operations.mjs';
import * as ops from './operations.mjs';
import { PI, E } from './constants.mjs';
import { power as pow, sqrt } from './advanced.mjs';
import logResult from './advanced.mjs';
import constants from './constants.mjs';
const calc = new Calculator();

console.log("Qo'shish:", add(5, 3));
console.log("Ayirish:", subtract(10, 4));
console.log("Ko'paytirish:", ops.multiply(6, 2));
console.log("Bo'lish:", ops.divide(9, 3));
console.log("Kvadrat:", calc.square(5));
console.log("Daraja:", pow(2, 4));
console.log("Ildiz:", sqrt(25));
console.log("PI:", PI, "E:", E);
console.log("Golden Ratio:", constants.GOLDEN_RATIO);

logResult(add(7, 8));
