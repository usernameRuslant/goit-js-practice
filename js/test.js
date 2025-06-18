// let price = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   price = 100;
// }

// console.log(price); // 100
//========================================================================================
// function getPrice(subscription) {
//   let price = 0;

//   if (subscription === "pro") {
// 	price = 100;
//   }

//   return price;
// }

// console.log(getPrice("free")); // 0
// console.log(getPrice("pro")); // 100
//========================================================================================
//========================================================================================
// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult",
// якщо значення параметра age більше або дорівнює 18.
//  Використай у тілі функції інструкцію if для перевірки значення age.
// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }

//   return;
// }

// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
//  і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"
// function checkStorage(available, ordered) {
//   if (available > ordered) {
//     return 'Order is processed, our manager will contact you';
//   } else {
//     return 'Not enough goods in stock!';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));
// ============================================================================================================
// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return password === correctPassword
//     ? 'Access granted'
//     : 'Access denied, wrong password!';
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));
// ============================================================================================================
// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.

// Якщо значення параметра type — це рядок:

// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

// Використай оператор switch для розв'язання цієї задачі!
// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;
//     case 'professional':
//       price = 20;
//       break;
//     case 'organization':
//       price = 50;
//       break;
//     default:
//       return 'Invalid subscription type!';
//   }
//   return price;
// }

// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('starter'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('premium'));
// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//   if (number > start && number < end) {
//     return 'true';
//   } else {
//     return 'false';
//   }
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.
// function checkAccess(subType) {
//   if (subType === 'pro' || 0) {
//     return true;
//   } else if (subType === 'vip' || 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkAccess('pro'));
// console.log(checkAccess('starter'));
// console.log(checkAccess('vip'));
// console.log(checkAccess('free'));

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.
// function toggleModalVisibility(isVisible) {
//   if (isVisible === true) {
//     return !true;
//   } else {
//     return !false;
//   }
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));
// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.
// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 5));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));
// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі
// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

// console.log(normalizeInput("This ISN'T SpaM", 'lower'));
// console.log(normalizeInput("This ISN'T SpaM", 'upper'));
// console.log(normalizeInput('Big SALE', 'lower'));
// console.log(normalizeInput('Big SALE', 'upper'));
// console.log(normalizeInput('Stay Awhile and Listen', 'lower'));
// console.log(normalizeInput('Stay Awhile and Listen', 'upper'));

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.
// function checkForName(fullName, firstName) {
//   const fName = fullName.toLowerCase();
//   const firstN = firstName.toLowerCase();

//   return fName.includes(firstN);
// }

// console.log(checkForName('Jason Neis', 'Jason'));
// console.log(checkForName('Jason Neis', 'jAsOn'));
// console.log(checkForName('Jason Neis', 'Jacob'));
// console.log(checkForName('Caty Stars', 'Caty'));
// console.log(checkForName('Caty Stars', 'cAtY'));
// console.log(checkForName('Caty Stars', 'Andromeda'));

// Функція checkFileExtension(fileName, ext) приймає два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }

// console.log(checkFileExtension('styles.css', '.css'));
// console.log(checkFileExtension('styles.css', '.js'));
// console.log(checkFileExtension('app.js', '.js'));
// console.log(checkFileExtension('app.js', '.html'));
// console.log(checkFileExtension('index.html', '.html'));
// console.log(checkFileExtension('index.html', '.css'));
// console.log(checkFileExtension('index.html', '.js'));

//Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//   const dot = file.indexOf('.');

//   if (file.includes('.')) {
//     return file.slice(0, dot);
//   } else {
//     return file;
//   }
// }

// console.log(getFileName('styles.css'));
// console.log(getFileName('app.js'));
// console.log(getFileName('app'));
// console.log(getFileName('index.js'));
// console.log(getFileName('index.html'));
// console.log(getFileName('index.css'));
// console.log(getFileName('index'));

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`;
// }

// console.log(createFileName(' order ', 'txt'));
// console.log(createFileName('report ', 'csv'));
// console.log(createFileName(' presentation', 'xml'));

// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let count = 0;
//   let i = 1;
//   while (i <= number) {
//     count += i;
//     i++;
//   }
//   return count;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 2; i <= number; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// Оголошена змінна start
// Оголошена змінна end
// Оголошена змінна number
// Якщо start це 6, а end це 17, то підсумкове значення змінної number дорівнює 10

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
// Доповни код функції таким чином, щоб вона:
// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(6, 9, 4));
