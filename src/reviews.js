'use strict';

/*<template id="review-template">
  <article class="review">
    <img src="" class="review-author" alt="" title="">
    <span class="review-rating"></span>
    <p class="review-text"></p>
    <div class="review-quiz">
      Полезный отзыв?
      <span class="review-quiz-answer review-quiz-answer-yes">Да</span>
      <span class="review-quiz-answer review-quiz-answer-no">Нет</span>
    </div>
  </article>
</template>*/

var reviewsContainer = document.querySelector('.reviews-list');
var templateElement = document.querySelector('template');
var elementToClone;

if ('content' in templateElement) {
  elementToClone = templateElement.content.querySelector('.review');
} else {
  elementToClone = templateElement.querySelector('.review');
}

var IMAGE_LOAD_TIMEOUT = 10000;

var getReviewElement = function(data, container) {
  var element = elementToClone.cloneNode(true);
  console.log(data);

  element.querySelector('.review-author').textContent = data.author;
  element.querySelector('.review-rating').textContent = data.rating;
  element.querySelector('.review-text').textContent = data.description;
  element.querySelector('.review-quiz').textContent = data.review_usefulness;

  container.appendChild(element);

  var backgroundImage = new Image();
  var backgroundLoadTimeout;

  backgroundImage.onload = function(evt) {
    clearTimeout(backgroundLoadTimeout);
    this.width = 124;
    this.height = 124;
    element.style.backgroundImage = 'url(\'' + evt.target.src + '\')';
  };

  backgroundImage.onerror = function() {
    element.classList.add('review-load-failure');
  };

  backgroundImage.src = data.author.picture;

  backgroundLoadTimeout = setTimeout(function() {
    backgroundImage.src = '';
    element.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return element;
};

window.reviews.forEach(function(review) {
  getReviewElement(review, reviewsContainer);
});
