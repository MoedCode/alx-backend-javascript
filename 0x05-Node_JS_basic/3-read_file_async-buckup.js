#!/usr/bin/env node
const fs = require('fs');

const countStudents = (filePath) => new Promise(
  (resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      error && reject(new Error('Cannot load the database'));
      if (data) {
        const TokenizedLines = data.toString('utf-8').trim().split('\n');
        const allObjects = {};
        const columnNames = TokenizedLines[0].split(',');
        // remove filed from column name
        const columnNamesB = columnNames.slice(0, columnNames.length - 1);

        for (const line of TokenizedLines.splice(1)) {
          const lineVales = line.split(',');
          const lineValesB = lineVales.slice(0, lineVales.length - 1);
          const filed = lineVales[lineVales.length - 1];
          if (!Object.keys(allObjects).includes(filed)) allObjects[filed] = [];
          const kwargs = lineValesB.map((key, idx)=> [key, lineValesB[idx]]) ;
          .
        }
        resolve(allObjects);
      }
    });
  });
if (require.main === module) {
  countStudents('nope.csv')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
