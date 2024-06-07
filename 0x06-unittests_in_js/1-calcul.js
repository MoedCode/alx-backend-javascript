#!/usr/bin/env node

function calculateNumber (type, a, b) {
  const A = Math.round(a); const B = Math.round(b);

  if (type === 'SUM') return A + B;
  if (type === 'SUBTRACT') return A - B;
  if (type === 'DIVIDE' && B === 0) return 'Error';

  else return A / B;
}
module.exports = calculateNumber;

if (require.main === module) {
  const args = process.argv;
  console.log(calculateNumber(args[2], args[3], args[4]));
}
