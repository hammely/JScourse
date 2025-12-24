import { sum as add, multiply as mult } from './module1.mjs';
console.log(add(10, 2)); // 12
console.log(mult(10, 2)); // 20

import greet from './module3.mjs';
console.log(greet('Лиза')); // Hello, Лиза!
