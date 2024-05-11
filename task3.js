// Функція для обчислення довжини масиву
function arrayLength(array) {
    if (!Array.isArray(array)) {
        console.log("Помилка: Переданий аргумент не є масивом.");
        return null;
    }
    return array.length;
}

// Отримання даних від користувача
const inputArray = prompt("Введіть елементи масиву, розділені комами: ");
if (!inputArray) {
    console.log("Помилка: Введені дані відсутні.");
} else {
    const array = inputArray.split(",");

    // Виклик функції та виведення результату в консоль
    console.log("Введені дані:", array);
    console.log("Довжина масиву:", arrayLength(array));
}
