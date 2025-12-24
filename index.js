// Declaration отдельная функция
console.log(add(5, 3)); // 8
function add(x, y) { return x + y; }

// Expression константа как функция
const sub = function(x, y) { return x - y; };
console.log(sub(5, 3)); // 2

// Стрелочная функция (разновидность Expression)
const div = (x, y) => x / y;
console.log(div(6, 2)); // 3