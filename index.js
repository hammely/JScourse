try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message); // Something went wrong
}
console.log("Code continues"); // Выполнится после обработки ошибки
