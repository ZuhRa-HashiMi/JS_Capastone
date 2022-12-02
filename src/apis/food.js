/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import paginate from '../index.js';

let meals = [];
let currentPosts = [];
const currentPage = 1;
const postsPerPage = 10;

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const showingNumbers = document.querySelector('.showing-numbers');
const mealsCounter = document.getElementById('meals-counter');

// Get length of meals
export const getMealsLength = () => {
  const totalMeals = meals.length;
  showingNumbers.innerHTML = `  <p class="text-sm text-gray-700">
  Showing
  <span class="font-medium">${indexOfFirstPost + 1}</span>
  to
  <span class="font-medium">${
  currentPosts.length >= 10 ? indexOfLastPost : totalMeals
}</span>
  of
  <span class="font-medium">${totalMeals}</span>
  meals
</p>`;
  mealsCounter.innerHTML = `<p class="text-sm font-bold text-gray-700">${totalMeals} meals</p>`;
};

export const getCurrentPosts = async () => {
  currentPosts = meals.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts;
};

export const searchFood = async () => {

};

export const defaultFood = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  );
  const data = await response.json();
  meals = data.meals;
  paginate(meals, currentPage);
  return getCurrentPosts();
};

export const handlePrevBtn = () => {

};

export const handleNextBtn = () => {

};

export const handlePageBtn = () => {

};
