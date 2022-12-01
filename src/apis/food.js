/* eslint-disable import/no-cycle */
import paginate from '../index.js';

let meals = [];
let currentPosts = [];
let currentPage = 1;
const postsPerPage = 10;

// Get current posts
let indexOfLastPost = currentPage * postsPerPage;
let indexOfFirstPost = indexOfLastPost - postsPerPage;


// Get length of meals
export const getMealsLength = () => {
 
};

export const getCurrentPosts = async () => {
  currentPosts = meals.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts;
};

export const searchFood = async (term) => {

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

export const handlePageBtn = (page) => {
 
};
