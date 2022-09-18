// Порахує і виведе в консоль кількість категорій в ul#categories,
// Для кожного элемента li.item у спику ul#categories, знайде і
// елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// 'use strict';
// const listCategory = document.querySelectorAll('li.item');
// console.log('Number of categories:', listCategory.length);

// listCategory.forEach(liItemCategory => {
//   const titleCategory = liItemCategory.firstElementChild.textContent;
//   const categoryLength = liItemCategory.querySelectorAll('li').length;
//   console.log('Category:', titleCategory);
//   console.log('Elements:', categoryLength);
// });
