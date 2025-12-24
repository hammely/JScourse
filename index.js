// 1. ОПЕРАТОРЫ И ПРИОРИТЕТЫ
let a = 10, b = 5, c = 2;
let result1 = a + b * c / 2 - 1; // 10 + (5*2/2) - 1 = 14
let result2 = (a + b) * (c / (2 - 1)); // (15) * (2/1) = 30
console.log(result1, result2);

// 2. ЛОГИЧЕСКИЕ ОПЕРАТОРЫ И FALSY ЗНАЧЕНИЯ
console.log(Boolean("")); // false
console.log(!!0); // false
console.log(!!"Hello"); // true
console.log(!true); // false
console.log(!!undefined); // false

let userName = "" || "Гость";
console.log(userName); // "Гость"

let isLogged = true;
isLogged && console.log("Пользователь вошёл");

// 3. ОПЕРАТОР TYPEOF
console.log(typeof 10); // "number"
console.log(typeof "текст"); // "string"
let value;
console.log(typeof value === "undefined"); // true

// 4. ОПЕРАТОР РАСШИРЕНИЯ (SPREAD)
const button = { id: 1, text: "Click" };
const redButton = { ...button, color: "red" };
console.log(redButton);

const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const merged = { ...obj1, ...obj2 }; // { x:1, y:3, z:4 }
console.log(merged);

// 5. КОНКАТЕНАЦИЯ СТРОК И ШАБЛОННЫЕ СТРОКИ
let name = "Лиза";
let city = "Керчь";
let greeting = `Привет, меня зовут ${name} и я живу в городе - ${city}`;
console.log(greeting);

// 6. ФУНКЦИИ: DECLARATION, EXPRESSION, СТРЕЛОЧНЫЕ
function multiply(value, multiplier = 1) {
    return value * multiplier;
}
console.log(multiply(5)); // 5

const multiplyArrow = (value, multiplier = 1) => value * multiplier;
console.log(multiplyArrow(5, 2)); // 10

const createPost = (post, createdAt = new Date()) => ({
    ...post,
    createdAt
});
const post = { id: 1, title: "Новость" };
console.log(createPost(post));

// 7. ОБРАБОТКА ОШИБОК (TRY...CATCH)
try {
    throw new Error("Что-то пошло не так");
} catch (error) {
    console.error(error.message);
}
console.log("Код продолжает работу");

// 8. МАССИВЫ И МЕТОДЫ
const arr = [1, 2, 3];
console.log(arr.length); // 3
console.log(arr[0]); // 1

// Методы, изменяющие массив
arr.push(4);
console.log(arr); // [1,2,3,4]
arr.pop();
console.log(arr); // [1,2,3]
arr.unshift(0);
console.log(arr); // [0,1,2,3]
arr.shift();
console.log(arr); // [1,2,3]

// Методы, не изменяющие массив
arr.forEach((element, index) => console.log(`${index}: ${element}`));
const doubled = arr.map(num => num * 2);
console.log(doubled); // [2,4,6]

// 9. ДЕСТРУКТУРИЗАЦИЯ
const userProfile = { name: "Лиза", age: 21, city: "Керчь" };
const { name: userName2, age } = userProfile;
console.log(userName2, age); // Анна 25

const fruits = ["яблоко", "банан"];
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2); // яблоко банан

// 10. УСЛОВНЫЕ ИНСТРУКЦИИ
let score = 85;
if (score > 90) {
    console.log("Отлично");
} else if (score > 70) {
    console.log("Хорошо"); // Выполнится это
} else {
    console.log("Нужно подтянуть");
}

// 11. ТЕРНАРНЫЙ ОПЕРАТОР
const status = score >= 60 ? "Сдал" : "Не сдал";
console.log(status); // Сдал

// 12. ЦИКЛЫ
// for
for (let i = 0; i < 3; i++) {
    console.log(`for: ${i}`);
}

// while
let j = 0;
while (j < 3) {
    console.log(`while: ${j}`);
    j++;
}

// do...while
let k = 0;
do {
    console.log(`do...while: ${k}`);
    k++;
} while (k < 3);

// for...of (для массивов и строк)
for (const fruit of fruits) {
    console.log(`fruit: ${fruit}`);
}

// for...in (для объектов)
for (const key in userProfile) {
    console.log(`${key}: ${userProfile[key]}`);
}

// 13. РАБОТА С ОБЪЕКТАМИ КАК С МАССИВАМИ
console.log(Object.keys(userProfile)); // ["name","age","city"]
console.log(Object.values(userProfile)); // [ 'Лиза', 21, 'Керчь' ]

Object.keys(userProfile).forEach(key => {
    console.log(`${key} -> ${userProfile[key]}`);
});

// 14. ФУНКЦИЯ С ПРОВЕРКАМИ
function processData(input) {
    if (typeof input !== "number") {
        return "Ошибка: нужен номер";
    }
    if (input < 0) {
        return "Ошибка: число должно быть положительным";
    }
    return `Результат: ${input * 10}`;
}
console.log(processData(5)); // Результат: 50
console.log(processData(-2)); // Ошибка: число должно быть положительным

// 15. КОРОТКОЕ ЗАМЫКАНИЕ (SHORT-CIRCUIT) ДЛЯ УСЛОВНОГО ВЫЗОВА
const isAdmin = true;
isAdmin && console.log("Доступ к админ-панели разрешён");

const config = null;
const defaultConfig = { theme: "light" };
const finalConfig = config || defaultConfig;
console.log(finalConfig); // {theme:"light"}
