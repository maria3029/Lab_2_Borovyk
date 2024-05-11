// Функція для обчислення суми останніх п'яти додатних елементів у масиві
function sumLastFivePositiveNumbers(array) {
    // Перевірка, чи переданий параметр є масивом
    if (!Array.isArray(array)) {
        return "Помилка: Переданий параметр не є масивом.";
    }

    // Відфільтровуємо масив, щоб отримати лише числа
    const numbers = array.map(num => parseInt(num)).filter(num => !isNaN(num));

    // Перевірка, чи масив містить щонайменше п'ять додатних чисел
    if (numbers.length < 5) {
        return "Помилка: Масив має містити щонайменше п'ять чисел.";
    }

    // Відфільтровуємо масив, щоб отримати лише додатні числа
    const positiveNumbers = numbers.filter(num => num > 0);

    // Перевірка, чи в масиві є додатні числа
    if (positiveNumbers.length === 0) {
        return "Помилка: У масиві відсутні додатні числа.";
    }

    // Перевертаємо масив та беремо перші п'ять елементів (останні п'ять додатних чисел)
    const lastFivePositiveNumbers = positiveNumbers.slice(-5);

    // Обчислюємо суму цих елементів
    const sum = lastFivePositiveNumbers.reduce((acc, num) => acc + num, 0);

    return sum;
}

// Отримання даних від користувача
const input = prompt("Введіть елементи, розділені комами: ");
const numbers = input.split(",");

// Виклик функції та виведення результату в консоль
console.log("Введені дані:", numbers);
console.log("Сума останніх п'яти додатних елементів:", sumLastFivePositiveNumbers(numbers));
