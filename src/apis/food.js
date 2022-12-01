/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import paginate from '../index.js';

let meals = [];
let currentPosts = [];
let currentPage = 1;
const postsPerPage = 10;

// Get current posts
let indexOfLastPost = currentPage * postsPerPage;
let indexOfFirstPost = indexOfLastPost - postsPerPage;
// const showingNumbers = document.querySelector('.showing-numbers');
// const mealsCounter = document.getElementById('meals-counter');

// Get length of meals
export const getMealsLength = () => {
  const totalMeals = meals.length;
};

export const getCurrentPosts = async () => {
  currentPosts = meals.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts;
};

export const searchFood = async (term) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`,
  );
  const data = await response.json();
  meals = data.meals;
  paginate(meals, currentPage);
  return getCurrentPosts();
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
  if (currentPage > 1) {
    currentPage -= 1;
  }
  indexOfLastPost = currentPage * postsPerPage;
  indexOfFirstPost = indexOfLastPost - postsPerPage;
  getCurrentPosts();
};

export const handleNextBtn = () => {
  if (currentPage < Math.ceil(meals.length / postsPerPage)) {
    currentPage += 1;
  }

  indexOfLastPost = currentPage * postsPerPage;
  indexOfFirstPost = indexOfLastPost - postsPerPage;
  getCurrentPosts();
};

export const handlePageBtn = (page) => {
  currentPage = page;
  indexOfLastPost = currentPage * postsPerPage;
  indexOfFirstPost = indexOfLastPost - postsPerPage;
  getCurrentPosts();
};
