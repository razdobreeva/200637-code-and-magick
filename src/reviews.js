'use strict';

var reviewsFilter = document.querySelector('.reviews-filter');
var reviewsContainer = document.querySelector('.reviews-list');
var templateElement = document.querySelector('template');
var elementToClone;

reviewsFilter.classList.add('invisible');

if ('content' in templateElement) {
  elementToClone = templateElement.content.querySelector('.review');
} else {
  elementToClone = templateElement.querySelector('.review');
}

var IMAGE_LOAD_TIMEOUT = 10000;

var getReviewElement = function(data, container) {
  var element = elementToClone.cloneNode(true);
  console.log(data);

  element.querySelector('.review-author').title = data.author.name;
  element.querySelector('.review-rating').textContent = data.rating;
  element.querySelector('.review-text').textContent = data.description;
  //element.querySelector('.review-quiz').textContent = data.review_usefulness;

  container.appendChild(element);

  var avatar = new Image();
  var avatarLoadTimeout;

  avatar.onload = function(evt) {
    clearTimeout(avatarLoadTimeout);
    avatar.style.width = 124;
    avatar.style.height = 124;
    element.querySelector('.review-author').src = evt.target.src;
  };

  avatar.onerror = function() {
    element.classList.add('review-load-failure');
  };

  avatar.src = data.author.picture;

  avatarLoadTimeout = setTimeout(function() {
    avatar.src = '';
    element.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return element;
};

window.reviews.forEach(function(review) {
  getReviewElement(review, reviewsContainer);
});

reviewsFilter.classList.remove('invisible');
