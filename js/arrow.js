// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result
//  був результат виконання функції makePizza,
//  а у змінній pointer було посилання на функцію makePizza.
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;
// =======================================================================================
// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Ultracheese', deliverPizza));
// =======================================================================================
// Функція makePizza має два параметри:
//  pizzaName - ім'я піци та callback - колбек-функцію.
// Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback),
//  передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName).
// Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName.
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
// =======================================================================================
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів,
// яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек - функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(el => {
//     totalPrice += el;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([164, 48, 291]));
// =======================================================================================
// Функція filterArray(numbers, value)
// приймає першим параметром масив чисел numbers і повертає новий масив,
// в якому будуть тільки ті елементи оригінального масиву,
//  які більші за значення другого параметра числа value.
// Якщо таких значень не буде знайдено, функція повертає порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// function filterArray(numbers, value) {
//   let newArr = [];
//   numbers.forEach(el => {
//     if (el > value) {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// =======================================================================================

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// =======================================================================================
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// =======================================================================================
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Також заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// // =======================================================================================
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// =======================================================================================
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число,
// додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
const changeEven = (numbers, value) => {
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  const newArr = [];
  numbers.forEach(element => {
    //   if (element % 2 === 0) {
    //     newArr.push(element + value);
    //   } else {
    //     newArr.push(element);
    //   }
    element % 2 === 0 ? newArr.push(element + value) : newArr.push(element);
  });
  return newArr;
};
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
// =======================================================================================
