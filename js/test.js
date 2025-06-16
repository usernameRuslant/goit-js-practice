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
