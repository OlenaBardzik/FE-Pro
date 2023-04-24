'use strict';

const calculator = new Calculator(100);
  
  
calculator.add(10); // 110 - это текущее значение base
calculator.add(10);
calculator.sub(20);


calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять


console.log(calculator.get()) // 40


calculator.reset();
console.log(calculator.get()) // 100







function Calculator (base) {
   this.counter = base;
   this.base = base;

    this.add = function (num) {
        if (!isNumber(num)) return;
        this.counter += num;
    };
    this.sub = function (num) {
        if (!isNumber(num)) return;
        this.counter -= num;
    };
    this.set = function (num) {
        if (!isNumber(num)) return;
        this.counter = num;
    };
    this.reset = function () {
        this.counter = this.base;
    };
    this.get = function () {
        return this.counter;
    };
   
  }

  function isNumber (input) {
   return typeof input === 'number';
  }
