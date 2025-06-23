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
// function createArrayOfNumbers(min, max) {
//   const newArr = [];
//   for (let i = min; i <= max; i += 1) {
//     newArr.push(`${i}`);
//   }
//   return newArr;
// }

// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(14, 17));
//=======================================================================================
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let sum = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     sum += order[i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//=======================================================================================
// Функція getEvenNumbers(start, end) має два параметри start та end,
// які є цілими числами.
//  Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
//  Якщо жодного парного числа немає, то масив має бути пустим.
//  Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   const newArr = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }

// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(7, 7));
// //=======================================================================================
// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла,
// чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   const str = item.toLowerCase();
//   if (storage.includes(str)) {
//     return `"${str} is available to order!"`;
//   } else {
//     return `"Sorry! We are out of stock!"`;
//   }
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));

// //=======================================================================================
// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// function getCommonElements(array1, array2) {
//   const newArr1 = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr1.push(array1[i]);
//     }
//   }
//   return newArr1;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// //=======================================================================================
// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.
// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (const number of order) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// //=======================================================================================

// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів,
// але в масиві вони повинні йти у зворотному порядку.
//  Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
// function createReversedArray() {
//   const arg = Array.from(arguments);
//   return arg.toReversed();
// }
// console.log(createReversedArray(12, 85, 37, 4));
// //=======================================================================================
// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.
function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}
console.log(calculateTax(200, 0.1));
console.log(calculateTax(100));
// //=======================================================================================
// const A = 'hello-world.com';
// const B = A.indexOf('-'); //5
// const C = A.lastIndexOf('.'); //11
// console.log(B);
// console.log(C);
