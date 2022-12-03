import { postComment } from '../apis/requests.js';

export default async (modal, meal) => {
  modal.innerHTML = `
        <div class="recipe-details-image w-full mobile-div relative">
          <img
            alt=${meal.strMeal}
            src=${meal.strMealThumb}
            class="recipe-image w-11/12 mx-auto md:max-w-full rounded-lg md:rounded-lg mobile"
          />
        </div>
      </div>
    
      <h2 class="comment-count-header">Commment (0) </h2>
      <ul class="comment-display">
    
      </ul>
      
      <h2 class="comment-header">Add Comment</h2>
      <form>
      <input type="text" class="username" placeholder = "Your name" required/>
      <textarea placeholder="Your comment" class="comment" required></textarea>
      <input type="submit" class="submitBtn" value="Comment" />
   </form>
     
     
    </div>
  </div>`;

  modal.parentElement.classList.add('showRecipe');
  const btn = document.querySelector('.submitBtn');
  const username = document.querySelector('.username');
  const comment = document.querySelector('.comment');
  const commentCount = document.querySelector('.comment-count-header');
  const ul = document.querySelector('.comment-display');
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    if (username.value.trim() === '') return;
    if (comment.value.trim() === '') return;

    const userVal = username.value;
    const commentVal = comment.value;
    const id = meal.idMeal;
    const post = { item_id: id, username: userVal, comment: commentVal };
    btn.value = 'Processing...';
    btn.disabled = true;
    await postComment(post);
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XkZb08sfqWimSB3Sqtb3/comments?item_id=${id}`,
    );
    const comments = await response.json();

    ul.innerHTML = '';
    comments.forEach((comPost) => {
      ul.innerHTML += `
          
        <li><p>${comPost.creation_date}</p><p>${comPost.username}</p><p>${comPost.comment}</p></li>
    `;
      commentCount.innerHTML = '';

      commentCount.innerHTML = `Comments (${comments.length})`;
      btn.value = 'Comment';
      btn.disabled = false;
      username.value = '';
      comment.value = '';
    });
  });

  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XkZb08sfqWimSB3Sqtb3/comments?item_id=${meal.idMeal}`,
  );
  const comments = await response.json();

  if (!comments.length) return;

  comments.forEach((comPost) => {
    ul.innerHTML += `
      
    <li><p>${comPost.creation_date}</p><p>${comPost.username}:</p><p>"${comPost.comment}"</p></li>
`;
    commentCount.innerHTML = '';

    commentCount.innerHTML = `Comments (${comments.length})`;
  });
};
