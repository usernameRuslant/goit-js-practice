// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);
//=======================================================================================
// Оголоси три змінні і надай кожній змінній відповідне значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
//=======================================================================================
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// fruits[1] = 'peach';
// fruits[fruits.length - 1] = 'banana';

// console.log(fruits);
//=======================================================================================
// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта. Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana', 'pear']));
// console.log(getOrderQuantity([]));
//=======================================================================================

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   return [array.length - 1, array[array.length - 1]];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
//=======================================================================================
// Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
//=======================================================================================
// Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.
// function getLength(array) {
//   const str = array.join('');
//   return str.length;
// }

// console.log(getLength(['M', 'a', 'n', 'g', 'o']));

//=======================================================================================

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   const countWords = message.split(' ');
//   return countWords.length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
//=======================================================================================
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
//=======================================================================================

// function countOddCount(from, to) {
//   let count = 0;
//   for (let i = from; i <= to; i += 1) {
//     if (i % 2 !== 0) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countOddCount(3, 9));
// console.log(countOddCount(2, 6));
// console.log(countOddCount(4, 4));
//=======================================================================================
// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
//=======================================================================================
// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   if (array.indexOf(value) === -1) {
//     return [];
//   } else {
//     return array.slice(0, array.indexOf(value) + 1);
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
//=======================================================================================
// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.
function createArrayOfNumbers(min, max) {
  const newArr = [];
  for (let i = min; i <= max; i += 1) {
    newArr.push(`${i}`);
  }
  return newArr;
}

console.log(createArrayOfNumbers(29, 34));
console.log(createArrayOfNumbers(14, 17));
//=======================================================================================
