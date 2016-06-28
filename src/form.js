'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  var marks = document.querySelector('.review-form-group-mark');
  var mark1 = document.querySelector('#review-mark-1');
  var mark2 = document.querySelector('#review-mark-2');
  var name = document.querySelector('#review-name');
  var text = document.querySelector('#review-text');
  var reviewFields = document.querySelector('.review-fields');
  var reviewFieldName = document.querySelector('.review-fields-name');
  var reviewFieldText = document.querySelector('.review-fields-text');
  var submitButton = document.querySelector('.review-submit');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
    submitButton.disabled = true;
    reviewFieldText.classList.add('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };

  name.oninput = function() {
    if (name.value !== '') {
      reviewFieldName.classList.add('invisible');
      if (reviewFieldText.classList.contains('invisible')) {
        reviewFields.classList.add('invisible');
        submitButton.disabled = false;
      }
    } else {
      reviewFields.classList.remove('invisible');
      reviewFieldName.classList.remove('invisible');
      submitButton.disabled = true;
    }
  };

  text.oninput = function() {
    if (text.value !== '') {
      reviewFieldText.classList.add('invisible');
      if (reviewFieldName.classList.contains('invisible')) {
        reviewFields.classList.add('invisible');
        submitButton.disabled = false;
      }
    } else {
      reviewFields.classList.remove('invisible');
      reviewFieldText.classList.remove('invisible');
      submitButton.disabled = true;
    }
  };

  marks.onchange = function() {
    if (mark1.checked || mark2.checked) {
      reviewFields.classList.remove('invisible');
      reviewFieldText.classList.remove('invisible');
      submitButton.disabled = true;
    } else {
      reviewFieldText.classList.add('invisible');
    }
  };
})();
