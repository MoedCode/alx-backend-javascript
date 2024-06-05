#!/usr/bin/env node

const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const TokenizeLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const columnNames = TokenizeLines[0].split(',');
      const columnNames2 = columnNames.slice(0, columnNames.length - 1);
      console.log(columnNames2);
      // Iterate over each line in the file (excluding the columnNames)
      for (const line of TokenizeLines.slice(1)) {
        const lineValues = line.split(',');
        const lineValues2 = lineValues.slice(0, lineValues.length - 1);
        const field = lineValues[lineValues.length - 1];

        // Initialize the field group if it doesn't exist
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Create a student object with field names as keys and data as values
        const studentEntries = columnNames2.map((fieldName, idx) => [fieldName, lineValues2[idx]]);
        console.log(studentEntries);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students
      const totalStudents = Object.values(studentGroups)
        .reduce((prev, curr) => (prev || []).length + curr.length);
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their names
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      console.log(studentGroups);
      resolve(true);
    }
  });
});

module.exports = countStudents;
countStudents('nope.csv');
