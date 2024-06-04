#!/usr/bin/env node

const displayMessage = (...args) => {
  for (const arg of args) {
    if (Array.isArray(arg)) {
      process.stdout.write('[');
      for (let i = 0; i < arg.length; i++) {
        if (i > 0) {
          process.stdout.write(', ');
        }
        process.stdout.write(String(arg[i]));
      }
      process.stdout.write(']');
    } else if (typeof arg === 'object') {
      let printed = 0;
      process.stdout.write('{');
      for (const key in arg) {
        if (printed) {
          process.stdout.write(', ');
        }
        process.stdout.write(`${key}: ${arg[key]}`);
        printed = 1;
      }
      process.stdout.write('}');
    } else {
      process.stdout.write(String(arg));
    }
  }
  process.stdout.write('\n');
};

module.exports = displayMessage;
