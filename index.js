// Приоритет операторов и скобки
const a = 10, b = 2, c = 3, d = 4, e = 1;
const withoutBrackets = a + b * c / d - e; // 10 + (2*3/4) - 1 = 10.5
const withBrackets = (a + b) * (c / (d - e)); // 12 * (3/3) = 12
console.log(`Без скобок: ${withoutBrackets}, Со скобками: ${withBrackets}`);

// Логические операторы и falsy значения
const falsyValues = [false, 0, "", undefined, null];
console.log("Falsy значения:", falsyValues.map(v => !v)); // все true

// typeof
console.log("Типы:", typeof 42, typeof "text", typeof undefined);

// Отрицание и двойное отрицание
console.log("Преобразование:", !10, !!10, !!"Hello", !!0); // false true true false

// Короткое замыкание и значения по умолчанию
const user = null;
const defaultUser = user || "Гость"; // "Гость"
const isAdmin = true;
isAdmin && console.log("Доступ разрешен");

// Spread оператор
const baseSettings = { theme: "dark", language: "ru" };
const userSettings = { ...baseSettings, notifications: true };
const merged = { ...baseSettings, ...{ theme: "light" } }; // theme перезаписан

// Шаблонные строки
const name = "Лиза";
const age = 21;
const greeting = `Привет, ${name}! Тебе ${age} год.`;

// ИНТЕГРАЦИЯ ВСЕГО ВМЕСТЕ
console.log(greeting);
console.log("Настройки:", userSettings);
console.log("Имя пользователя:", defaultUser);