/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './base.css';
import './style.css';
import logo from './yummly.svg';
import { getLike } from './apis/likes.js';
/* eslint-disable import/no-cycle */
import {
  getCurrentPosts,
  defaultFood,
  searchFood,
  handleNextBtn,
  handlePrevBtn,
  handlePageBtn,
} from './apis/food.js';

const myLogo = document.querySelector('.logoYummy');
myLogo.setAttribute('src', logo);

export default (meals, currentPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(meals.length / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  const page = document.querySelector('.page');
  page.innerHTML = '';
  const ul = document.createElement('ul');
  ul.classList.add('inline-flex');
  pageNumbers.forEach((number) => {
    const li = document.createElement('li');
    li.classList.add('page-item');
    if (number === currentPage) {
      li.classList.add('active');
    }
    li.innerHTML = `<a class="page-link bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">${number}</a>`;
    li.addEventListener('click', (e) => {
      e.preventDefault();
      handlePageBtn(number);
      if (searchFood(term)) {
        template(searchFood(term), mealsEl, resultHeading);
      } else if (defaultFood()) {
        defaultTemplate(defaultFood(), mealsEl, getLike(), resultHeading);
      }
    });

    ul.appendChild(li);
  });
  page.appendChild(ul);
};
// only for push 