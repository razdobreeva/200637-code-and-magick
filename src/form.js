'use strict';

var browserCookies = require('browser-cookies');

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  var formName = document.querySelector('#review-name');
  var formText = document.querySelector('#review-text');
  var marks = document.querySelector('.review-form-group-mark');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
    validateForm();
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };

  formName.oninput = function() {
    validateForm();
  };

  formText.oninput = function() {
    validateForm();
  };

  marks.onchange = function() {
    validateForm();
  };
})();

function validateForm() {
  var checkedMark = document.querySelector('input[name="review-mark"]:checked');
  var formName = document.querySelector('#review-name');
  var formText = document.querySelector('#review-text');
  var reviewFields = document.querySelector('.review-fields');
  var reviewFieldName = document.querySelector('.review-fields-name');
  var reviewFieldText = document.querySelector('.review-fields-text');
  var submitButton = document.querySelector('.review-submit');

  if (formName.value !== '') {
    reviewFieldName.classList.add('invisible');
  } else { // случай, когда пользователь набрал логин, но потом стер его
    reviewFieldName.classList.remove('invisible');
  }

  if (parseInt(checkedMark.value, 10) < 3) {
    if (formText.value !== '') {
      reviewFieldText.classList.add('invisible');
    } else {
      reviewFieldText.classList.remove('invisible');
    }
  } else {
    reviewFieldText.classList.add('invisible');
  }

  if (reviewFieldName.classList.contains('invisible') && reviewFieldText.classList.contains('invisible')) {
    reviewFields.classList.add('invisible');
    submitButton.disabled = false;
  } else {
    reviewFields.classList.remove('invisible');
    submitButton.disabled = true;
  }
}
