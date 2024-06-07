#!/usr/bin/env node
x = [1, 2, 3, 4];

y = x.splice(1);
console.log(`x : ${x}`);
console.log(`y : ${y}`);
console.log(` [1, 2, 3, 4].splice(1) : ${[1, 2, 3, 4].splice(1)}`);
// x : 1
// y : 2,3,4
matrix = [
  ['Johann', 'Kerbrou', '30'],
  ['Guillaume', 'Salou', '30'],
  ['Arielle', 'Salou', '20'],
  ['Jonathan', 'Benou', '30'],
  ['Emmanuel', 'Turlou', '40'],
  ['Guillaume', 'Plessous', '35'],
  ['Joseph', 'Crisou', '34'],
  ['Paul', 'Schneider', '60'],
  ['Tommy', 'Schoul', '32'],
  ['Katie', 'Shirou', '21']
];
module.exports = matrix;
