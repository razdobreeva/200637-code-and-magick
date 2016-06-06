'use strict';

  /*[sum] - сумма значений переданного массива*/
function calculateSteps (a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}
/*[distance] - сумма произведений
соответствующих элементов массивов a и b,
cумма произведения первого элемента a с первым элементом b,
второго со вторым и так далее*/
function calculateDistance (a, b) {
  var distance = 0;
  for (var i = 0; i < a.length; i++) {
      distance += a[i]*b[i];
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
    return 'Я прыгнул на ' + a*100 + ' сантиметров';
  }
  else if (Array.isArray(a) && Array.isArray(b)) {
    return 'Я прошёл ' + calculateDistance(a, b) + ' метров';
  }
  else if (Array.isArray(a)) {
    return 'Я прошёл ' + calculateSteps(a) + ' шагов';
  }
}
