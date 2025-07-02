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

// //   orderedItems.forEach(item => {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // };

// // // =======================================================================================
// // Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
// // const filterArray = (numbers, value) => {
// //   const filteredNumbers = [];

// //   numbers.forEach(number => {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   return filteredNumbers;
// // };

// // =======================================================================================
// // Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число,
// // додаючи до нього значення параметра value, який точно є числом.

// // Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// // const changeEven = (numbers, value) => {
// // for (let i = 0; i < numbers.length; i += 1) {
// //   if (numbers[i] % 2 === 0) {
// //     numbers[i] = numbers[i] + value;
// //   }
// // }
// //   const newArr = [];
// //   numbers.forEach(element => {
// //     //   if (element % 2 === 0) {
// //     //     newArr.push(element + value);
// //     //   } else {
// //     //     newArr.push(element);
// //     //   }
// //     element % 2 === 0 ? newArr.push(element + value) : newArr.push(element);
// //   });
// //   return newArr;
// // };
// // console.log(changeEven([1, 2, 3, 4, 5], 10));
// // console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// // =======================================================================================
// // const array = [1, 2, 3, 4, 5];
// // const createPowArray = number => number.map(num => Math.pow(num, 2));
// // console.log(createPowArray(array));

// // =======================================================================================

// // Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const data1 = [
//   { id: 1, values: [9, 8, 7] },
//   { id: 2, values: [6, 5, 4] },
//   { id: 3, values: [3, 2, 1] },
// ];
// const flatArray = value => value.flatMap(item => item.values);

// // console.log(flatArray(data));
// // console.log(flatArray(data1));
// // console.log(data);

// // =======================================================================================
// // Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const findNumber = array => array.find(num => num % 2 !== 0);
// // =======================================================================================

// // Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
// const numbersArr = [4, 2, 5, 1, 3];
// //грязный метод
// // const sortArr = array => array.sort((a, b) => a - b);
// //чистый метод
// const sortArr = array => array.toSorted((a, b) => a - b);

// // console.log(sortArr(numbersArr));
// // console.log(numbersArr);

// // Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].
// // =======================================================================================
// const fruitArr = ['banana', 'orange', 'apple', 'pear'];
// const sortArr1 = array => array.toSorted((a, b) => a.localeCompare(b));

// console.log(sortArr1(fruitArr));
// console.log(fruitArr);
// =======================================================================================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const ageSort = arr => arr.toSorted((a, b) => a.age - b.age);

// // console.table(ageSort(users));

// // =======================================================================================

// // Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
// const getAge = array => array.filter(item => item.age > 20);

// console.table(getAge(user));

// =======================================================================================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sumEl = array => array.reduce((acc, el) => (acc += el), 0);

// const changeArray = array =>
//   array.reduce((acc, el) => (acc.push(el * 2), acc), []);

// console.log(sumEl(numbers));
// console.log(changeArray(numbers));

// // =======================================================================================
// console.log(
//   user
//     .map(item => item.name)
//     .toSorted((a, b) => a.localeCompare(b))
//     .forEach((el, ind) => console.log(`${ind + 1} - ${el}`))
// );

// =======================================================================================
// В масиві planets зберігаються назви планет.
//  Доповни код таким чином, щоб у змінній planetsLengths вийшов масив,
//  що буде складатися з довжин назв кожної планети з масиву planets.
//  Обов'язково використовуй метод map().
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(item => item.length);
// console.log(planetsLengths);
// =======================================================================================
// Масив books містить колекцію об'єктів книг,
// кожен з яких містить властивості title, author, rating.
// //  Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map(item => item.title);

// console.log(titles);
//================================================================

const data = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
// const getUserEmails = users => users.map(item => item.email);

// console.log(getUserEmails(data));
// //============================================================================
// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(item => item % 2 === 0);
// const oddNumbers = numbers.filter(item => item % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);
//============================================================================
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(item => item.rating > MIN_RATING);
// const booksByAuthor = books.filter(item => item.author === AUTHOR);

// console.table(topRatedBooks);
// console.table(booksByAuthor);
// //==========================================================================
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(item => item.eyeColor === color);

// console.log(getUsersWithEyeColor(data, 'green'));
// //==========================================================================
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter(item => minAge <= item.age && item.age <= maxAge);

// console.table(getUsersWithAge(data, 20, 30));
// //==========================================================================

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find(item => item.title === BOOK_TITLE);
// const bookByAuthor = books.find(item => item.author === AUTHOR);
//=====================================================================
// const email = 'elmahead@omatom.com';
// const getUserWithEmail = (users, email) =>
//   users.find(item => item.email === email);

// console.log(getUserWithEmail(data, email));
//=====================================================================
// const isEveryUserActive = users => users.every(item => item.isActive);

// console.log(isEveryUserActive(data));
//=====================================================================
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем.
// У змінній players зберігається об'єкт,
// де ключ це ім'я гравця, а значення - його ігровий час.
// У змінній playtimes зберігається масив значень об'єкта players,
// тобто масив ігрового часу усіх гравців.
// Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, item) => (acc += item), 0);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);

// console.log(averagePlayTime);
//=====================================================================
// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

// Поради:

// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, item) => acc + item.playtime / item.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);
//=====================================================================
// const calculateTotalBalance = users =>
//   users.reduce((acc, item) => (acc += item.balance), 0);

// console.log(calculateTotalBalance(data));
//=====================================================================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = authors.toSorted();

// console.log(alphabeticalAuthors);
//=====================================================================
// Змінна releaseDates - це масив чисел, років видання книг.

// Онлайн бібліотеці необхідно відображати книги, відсортовані за датою видання, за їх зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
//=====================================================================
// Змінна authors - це масив рядків, авторів книг.

// Онлайн бібліотеці необхідно відображати книги, відсортовані за автором в алфавітному і в зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
//=====================================================================
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// //=====================================================================
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(author => author.author)
  .toSorted((a, b) => a.localeCompare(b));

console.log(names);

const hotel = {};
console.log(hotel.name);
