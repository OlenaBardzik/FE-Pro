// Проверить что слово love встречается в строке:
let regexpLove = /love/i;
console.log( regexpLove.test('I love JavaScript') ); // true
console.log( regexpLove.test('I JavaScript') ); // false

// Проверить что строка заканчивается на ing:
let regexpIng = /ing$/;
console.log( regexpIng.test('Good morning') ); // true
console.log( regexpIng.test('Good morning!') ); // false