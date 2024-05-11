// Функція для обчислення факторіалу числа рекурсивно
function factorial(n) {
    if (isNaN(n)) {
        return "Помилка: Введене значення не є числом.";
    } else if (!Number.isInteger(n) || n < 0) {
        return "Помилка: Факторіал можна обчислити тільки для невід'ємних цілих чисел.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Зчитування даних від користувача через командний рядок
const userInput = prompt("Введіть число для обчислення факторіалу: ");
const number = parseInt(userInput);

if (isNaN(number)) {
    console.log("Помилка: Введене значення не є числом.");
} else {
    // Виклик функції та виведення результату
    console.log("Введене число:", number);
    console.log("Факторіал числа:", factorial(number));
}