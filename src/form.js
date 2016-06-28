'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  var marks = document.querySelector('.review-form-group-mark');
  var name = document.querySelector('#review-name');
  var text = document.querySelector('#review-text');
  var reviewFields = document.querySelector('.review-fields');
  var reviewFieldsName = document.querySelector('.review-fields-name');
  var reviewFieldsText = document.querySelector('.review-fields-text');
  var submitButton = document.querySelector('.review-submit');


  //var reviewForm = document.querySelector('.overlay review-form');
  //var marks = reviewForm.elements.review-mark;

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
    submitButton.disabled = true;
    reviewFieldsText.classList.add('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };

  name.oninput = function() {
    reviewFieldsName.classList.add('invisible');
  };

  text.oninput = function() {
    reviewFieldsText.classList.add('invisible');
  };
})();
