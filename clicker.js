const readline = require('readline');
const EventEmitter = require('events');

// Створення нового об'єкта EventEmitter
const clicker = new EventEmitter();

// Лічильник кліків
let clickCount = 0;

// Додаємо слухача подій для події "click"
clicker.on('click', () => {
  clickCount++;
  console.log(`Клік! Лічильник: ${clickCount}`);
});

// Створюємо інтерфейс для зчитування з консолі
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Очікуємо введення користувача та емітуємо подію "click" при кожному кліку
rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    rl.close(); // Закриваємо інтерфейс вводу
    process.exit(); // Завершуємо процес
  } else {
    clicker.emit('click');
  }
});

// Запускаємо програму та очікуємо введення користувача
console.log('Натискайте Enter для кліків. Для виходу введіть "exit".');
