function sumPositiveNums(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "One of the arguments is not a number"; // Проверка числового формата
    }
    if (a <= 0 || b <= 0) { // Проверка чисел на неотрицательность 
      return "Numbers are not positive";
    }
    return a + b;
  }
  console.log(sumPositiveNums(-10, 8)); // 11
