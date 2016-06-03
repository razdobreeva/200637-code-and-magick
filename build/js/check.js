'use strict';

function getMessage(a, b) {
  if (typeof a === 'boolean') {
    if (a) {
      return 'Я попал в [b]';
    }
    else {
      return 'Я никуда не попал';
    }
  }
  else if (typeof a === 'number') {
    return 'Я прыгнул на [a]*100 см';
  }
  else if (typeof a === 'object' && typeof b === 'object') {
    return 'Я прошел [length] метров';
    //[length] - сумма произведений
    //соответствующих элементов массивов a и b,
    //cумма произведения первого элемента a с первым элементом b,
    //второго со вторым и так далее
  }
  else if (typeof a === 'object') {
    return 'Я прошел [sum] шагов';
    //[sum] - сумма значений переданного массива
  }
}
