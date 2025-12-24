// Правильно
const arr = [1, 2, 3];
const result = arr.map((x) => x * 3);
console.log(result); // [3, 6, 9]

// Ошибка: нет return
const wrong = arr.map((x) => { x * 3; });
console.log(wrong); // [undefined, undefined, undefined]
