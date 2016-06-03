'use strict';

function calculateSteps (a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

function calculateDistance (a, b) {
  var distance = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      distance += a[i]*b[j];
    }
  }
  return distance;
}

function getMessage(a, b) {
  if (typeof a === 'boolean') {
    if (a) {
      return 'Я попал в ' + b;
    }
    else {
      return 'Я никуда не попал';
    }
  }
  else if (typeof a === 'number') {
    return 'Я прыгнул на ' + a*100 + ' см';
  }
  else if (typeof a === 'object' && typeof b === 'object') {
    return 'Я прошел ' + calculateDistance (a, b) + ' метров';
    //[length] - сумма произведений
    //соответствующих элементов массивов a и b,
    //cумма произведения первого элемента a с первым элементом b,
    //второго со вторым и так далее
  }
  else if (typeof a === 'object') {
    return 'Я прошел ' + calculateSteps(a) + ' шагов';
    //[sum] - сумма значений переданного массива
  }
}
