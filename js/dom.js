// const refs = {
//   usernameFields: document.querySelector('.js-user-name'),
//   policyCheckbox: document.querySelector('.js-policy-checkbox'),
// };
// refs.usernameFields.addEventListener('input', () => {
//   console.dir(refs.usernameFields.value);
// });
// ===============================================================
//для интерактива
// refs.usernameFields.addEventListener('blur', () => {
//   const usernameValue = refs.usernameFields.value.trim();
//   if (usernameValue === '') {
//     return;
//   }
//   alert(`welcome ${usernameValue}`);
// });
// ===============================================================
//больше для форм
// refs.usernameFields.addEventListener('change', () => {
//   const usernameValue = refs.usernameFields.value.trim();
//   if (usernameValue === '') {
//     return;
//   }
//   alert(`welcome ${usernameValue}`);
// });
// ===============================================================
//
// refs.policyCheckbox.addEventListener('change', () => {
//   if (refs.policyCheckbox.checked) {
//     alert('done!');
//   }
// });
// ===============================================================
// const refs = {
//   form: document.querySelector('.js-form'),
// };

// const onFormSubmit = event => {
//   event.preventDefault();
//   const formDate = {
//     email: refs.form.elements.email.value.trim(),
//     password: refs.form.elements.password.value.trim(),
//     comment: refs.form.elements.comment.value.trim(),
//   };
//   if (Object.values(formDate).includes('')) {
//     alert('заполни все поля');
//     return;
//   }
//   console.log(formDate);
//   refs.form.reset();
// };

// refs.form.addEventListener('submit', onFormSubmit);
//==================================================================
// document.addEventListener('keypress', () => {
//   console.log(event);
// });
//============
// document.addEventListener('keydown', () => {
//   console.log(event);
// });
//============
// document.addEventListener('keyup', () => {
//   console.log(event);
// });
//============
// document.addEventListener('keydown', event => {
//   if (event.code === 'KeyF' && (event.ctrlKey || event.metaKey)) {
//     event.preventDefault();
//   }
//   console.log(event);
// });
//==================================================================
// const refs = {
//   box: document.querySelector.querySelector('.js-box'),
// };

// refs.box.addEventListener('mouseenter', () => {});
// refs.box.addEventListener('mouseleave', () => {});
// //mouseover когда наводим на эл и его детей
// refs.box.addEventListener('mouseover', () => {});
// refs.box.addEventListener('mouseout', () => {});
// refs.box.addEventListener('mousemove', () => {});
//==================================================================
// //
// const allCars = [
//   {
//     id: 1,
//     brand: 'Audi',
//     model: 'A6',
//     price: 30000,
//     img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
//   },
//   {
//     id: 2,
//     brand: 'Honda',
//     model: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     id: 3,
//     brand: 'Audi',
//     model: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     id: 4,
//     brand: 'BMW',
//     model: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     id: 5,
//     brand: 'Honda',
//     model: 'Accord',
//     price: 20000,
//     number: '+380000000000',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     id: 6,
//     brand: 'Volvo',
//     model: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// ];

// const createCarCardTemplate = carinfo => {
//   return `<li class="car-list-item">
//       <img src="${carinfo.img}" alt="${carinfo.brand} ${carinfo.model}" class="car-list-img">
//       <div class="car-list-text-content">
//         <h3 class="car-list-title">${carinfo.brand} ${carinfo.model}</h3>
//         <p class="car-list-price">${carinfo.price}</p>
//       </div>
//     </li>`;
// };

// const carTemplate = allCars.map(car => createCarTemplate(car));

// const refs = {
//   carList:
//   searchForm:
// }

// refs.carList.innerHTML = carCardTemplate;

// const onSearchFormSubmit = event => {
//   event.preventDefault();

//   const formData = {
//     query: refs.searchForm.elements.query.value.trim(),
//     option:refs.searchForm.elements.option.value,
//   }
//   if (formData.query === '') {
//     alert('заполни поля');
//     return
//   }
//   const filterCards = allCars.filter(car => car[formData.option].toLowerCase() === formData.query)
// }
//================================================

// const inputEl = document.querySelector('.js-username-input');

// const onInput = e => {
//   const input = e.currentTarget;
//   if (input.value.trim().lehgth > 6) {
//     input.classList.add('success');
//     input.classList.remove('error');
//   } else {
//     input.classList.remove('seccess');
//     input.classList.add('error');
//   }
// };
// inputEl.addEventListener('input', onInput);

// const onFocus = (e) => {
//   //   console.log(e);
//   //   const input = e.currentTarget;
//   //   if (input.value.trim().length > 0) {
//   //     input.style.outline = "3px solid green";
//   //   } else {
//   //     input.style.outline = "3px solid red";
//   //   }
//   // };

//   // inputEl.addEventListener("focus", onFocus);

// const onBlur = e => {
//   const input = e.currentTarget;
//   if (input.value.trim()) {
//     input.style.outline = '3px solid green';
//   } else {
//     input.style.outline = '3px solid red';
//   }
// };
// inputEl.addEventListener('blur', onBlur);
//=======================================================================
// const formEl = document.querySelector('.js-contact-form');
// const onSubmit = e => {
//   e.currentTarget.elements.userName;
//   e.preventDefault();
//   const input = e.currentTarget.elements.userName;
//   const checkBox = e.currentTarget.elements.accept;
//   3; // const { userName, accept } = e.currentTarget.elements;
//   if (!input.value.trim() || !checkBox.checked) {
//     return alert('error');
//   }

//   const userData = {
//     userName: input.value.trim(),
//   };
//   e.currentTarget.reset();
// };

// formEl.addEventListener('submit', onSubmit);
//=======================================================================
// const inputEl = document.querySelector('.js-password-input');
// const btnEl = document.querySelector('.js-password-button');

// const onClickBtn = e => {
//   if (inputEl.type === 'text') {
//     inputEl.type = 'password';
//     e.currentTarget.textContent = 'open';
//   } else {
//     inputEl.type = 'text';
//     e.currentTarget.textContent = 'close';
//   }
// };

// btnEl.addEventListener('click', onClickBtn);

// const btnIncEl = document.querySelector('.js-increase');
// const btnDecEl = document.querySelector('.js-decrease');
// const boxEl = document.querySelector('.box');

// onIncClick = e => {
//   boxEl.style.width = `${boxEl.offsetWidth + 20}px`;
//   boxEl.style.height = `${boxEl.offsetHeight + 20}px`;
// };

// onDecClick = e => {
//   boxEl.style.width = `${boxEl.offsetWidth - 20}px`;
//   boxEl.style.height = `${boxEl.offsetHeight - 20}px`;
// };

// btnIncEl.addEventListener('click', onIncClick);
// btnDecEl.addEventListener('click', onDecClick);
//=======================================================================
const buttonEl = document.querySelector('.my-btn');

onClickBtn = e => {
  alert('Привет!');
  buttonEl.removeEventListener('click', onClickBtn);
};

buttonEl.addEventListener('click', onClickBtn);
