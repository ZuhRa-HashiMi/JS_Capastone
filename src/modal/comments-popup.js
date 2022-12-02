import { meals } from '../apis/food.js';

const commentsPopup = () => {
  const commentsBtn = document.querySelectorAll('.comments-btn');
  const commentsModal = document.querySelector('.comments-modal');

  for (let i = 0; i < commentsBtn.length; i += 1) {
    commentsBtn[i].addEventListener('click', () => {
      commentsModal.innerHTML = `
            <div id="comments-modal" class="modal">
     <div class="modal-content-wrapper">
       <div class="modal-content">
         <span id="close-btn" class="close-modal">&times;</span>
         <div class="container">
           <div class="inner-content">
             <img src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" class="meal-img"/>
             
             <div class="text-box">
               <h1 class="heading text-center">${meals[i].strMeal}</h1>
               <div class="flex-items">
                 <div class="left">
                   <p class="text">Food: Assorted Meal</p>
                 </div>
                 <div class="right">
                   <p class="text">Calories: 480</p>
                 </div>
               </div>
             </div>

             <div class="comments">
               <h1 class="sub-heading text-center">Comments (2)</h1>
             <div class="displayed-comments">
               <p>03-10-2022  Jimmy: Delicious</p>
               <p>11-05-2022  Jidula: I want to try it again!</p>
             </div>
             </div>

             <div class="comments-form">
               <form id="comments-form">
                 <h1 class="sub-heading text-center">Add a comment</h1>
                 <div class="form-control">
                   <input type="text" id="name" placeholder="Enter your name" />
                   <textarea id="comment" rows="3" placeholder="Enter your comment"></textarea>
                 </div>
                 <button type="submit" class="comment-btn">Submit</button>
               </form>
             </div>
           
           </div>
         </div>
       </div>
     </div>

   </div>
   `;
      const closeBtn = () => {
        const closeBtn = document.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
          commentsModal.innerHTML = '';
        });
      };
      closeBtn();
    });
  }
};

export default commentsPopup;