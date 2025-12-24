// === 1. Режим 'use strict' и основы ===
'use strict';

// === 2. Переменные, типы, область видимости ===
const globalVar = 'Я глобальная';
let changeableVar = 100;

// === 3. Объекты: создание, свойства, методы ===
const user = {
  name: 'Лиза',
  age: 21,
  city: 'Керчь',

  // Сокращённый метод (ES6)
  greet() {
    console.log(`Привет, я ${this.name}`);
  },

  // Обычный метод
  updateAge(newAge) {
    this.age = newAge;
  }
};

// Добавление/удаление свойств
user.country = 'RUSSIA';
delete user.city;

// === 4. JSON: конвертация ===
const userJSON = JSON.stringify(user);
const parsedUser = JSON.parse(userJSON);

// === 5. Функции и callback ===
function sum(a, b) {
  return a + b;
}

const multiply = function(x, y) {
  return x * y;
};

// Callback функция
function processNumbers(num1, num2, callback) {
  return callback(num1, num2);
}

const result = processNumbers(5, 3, sum); // 8

// === 6. Создание копий объектов (без мутации) ===
const original = { a: 1, b: { inner: 'текст' } };

// Поверхностная копия (spread оператор)
const shallowCopy = { ...original };

// Глубокая копия (через JSON)
const deepCopy = JSON.parse(JSON.stringify(original));

// === 7. Работа с глобальными объектами ===
// Проверяем, находимся ли мы в браузере
if (typeof window !== 'undefined') {
  console.log('Высота окна:', window.innerHeight);
} else {
  console.log('Запущено не в браузере (вероятно, Node.js)');
}

console.log('Глобальный объект:', globalThis);

// === 8. Консоль и отладка ===
console.log('Лог:', user);
console.dir(user); // Структура объекта
console.table([user, parsedUser]); // Табличный вывод

// === 9. Пример с областью видимости ===
function scopeExample() {
  const localVar = 'Я локальная';
  console.log(localVar);
  console.log(globalVar); // Доступ к глобальной
  
  // Вложенная функция
  function inner() {
    console.log('Внутренняя функция видит:', localVar);
  }
  inner();
}

scopeExample();

// === 10. Операторы и выражения ===
let a = 10;
let b = 5;

// Арифметические
const sumResult = a + b;
const isGreater = a > b;

// Логические
const logicalAnd = (a > 0) && (b > 0);
const logicalOr = (a < 0) || (b > 0);

// Присваивание с операцией
a += 3; // a = 13

// === 11. Вызов метода объекта ===
user.greet();
user.updateAge(22);
console.log('Новый возраст:', user.age);

// === 12. Имитация асинхронности с setTimeout (callback) ===
console.log('Старт');
setTimeout(() => {
  console.log('Выполнено через 500мс');
}, 500);

// === 13. Проверка типов ===
console.log('Тип user:', typeof user);
console.log('Тип sum:', typeof sum);

// === 14. Финальный вывод ===
console.log('\n=== ИТОГИ ===');
console.log('Глобальная переменная:', globalVar);
console.log('Объект user:', user);
console.log('user в JSON:', userJSON);
console.log('Результат сложения:', result);
console.log('Копия original:', deepCopy);