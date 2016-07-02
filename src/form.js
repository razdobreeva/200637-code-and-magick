'use strict';

(function() {
  var browserCookies = require('browser-cookies');

  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');
  var reviewForm = document.querySelector('.review-form');

  var formName = document.querySelector('#review-name');
  var formText = document.querySelector('#review-text');
  var marks = document.querySelector('.review-form-group-mark');
  var checkedMark = document.querySelector('input[name="review-mark"]:checked');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');

    checkedMark.value = browserCookies.get('userMark');
    formName.value = browserCookies.get('userName');

    console.log(browserCookies.get('userMark'));
    console.log(browserCookies.get('userName'));

    validateForm();
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };

  reviewForm.onsubmit = function(evt) {
    evt.preventDefault();

    browserCookies.set('userMark', checkedMark.value, {
      expires: Date.now() + 10000000000
    });
    console.log(browserCookies.get('userMark'));

    browserCookies.set('userName', formName.value, {
      expires: Date.now() + 10000000000
    });
    console.log(browserCookies.get('userName'));

    this.submit();
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
