'use strict';
//Лічильник складається зі спану і кнопок,які по кліку повинні збільшувати і зменшувати його значення
// на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її
//  значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueText: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
refs.decrementBtn.addEventListener('click', decrementValue);
refs.incrementBtn.addEventListener('click', incrementValue);

function decrementValue() {
  refs.valueText.textContent = counterValue - 1;
}
function incrementValue() {
  refs.valueText.textContent = counterValue + 1;
}

// const refs = {
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   valueLabel: document.querySelector('#value'),
//   incrementBtn: document.querySelector('[data-action="increment"]'),
// };
// let counterValue = Number.parseInt(refs.valueLabel.textContent) || 0;

// function updateValue(newValue) {
//   refs.valueLabel.textContent = newValue;
// }
// refs.decrementBtn.addEventListener('click', () => {
//   counterValue -= 1;
//   updateValue(counterValue);
// });
// refs.incrementBtn.addEventListener('click', () => {
//   counterValue += 1;
//   updateValue(counterValue);
// });

// let counterValue = 0;
// const btnEl = document.querySelectorAll('button');
// const valueEl = document.querySelector('#value');
// btnEl[0].addEventListener('click', () => {
//   valueEl.textContent = counterValue -= 1;
// });
// btnEl[1].addEventListener('click', () => {
//   valueEl.textContent = counterValue += 1;
// });
