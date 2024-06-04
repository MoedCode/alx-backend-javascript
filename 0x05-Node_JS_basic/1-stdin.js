#!/usr/bin/env node

// Display initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// set up event listener for users inputs
process.stdin.on('readable', () => {
  // reading
  const chunk = process.stdin.read();
  if (chunk) {
    // now printing so we use stdout
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
