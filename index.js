// Объявляем функцию
function applyOperation(a, b, operation) {
  return operation(a, b); // Вызываем callback
}

// Глобальная переменная
const multiplier = 2;

// Используем всё вместе
const total = applyOperation(5, 3, function(x, y) {
  const result = x + y; // Локальная переменная
  return result * multiplier; // Доступ к глобальной
});

console.log(total); // 16 = (5+3)*2