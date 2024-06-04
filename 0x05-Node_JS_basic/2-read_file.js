#!/usr/bin/env node
// const { error } = require('console');
const fs = require('fs');

function countStudents (filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(filePath, 'utf-8');

  allObjects = ORM(data);
  NUMBER_OF_STUDENTS = Object.keys(allObjects).length;

  console.log(`Number of students: ${NUMBER_OF_STUDENTS} `);
  all_cs = get_by(allObjects, 'field', 'CS', 'firstname');
  all_SWE = get_by(allObjects, 'field', 'SWE', 'firstname');
  console.log(`Number of students in CS: ${all_cs.length}. List: ${arr_to_string(all_cs)}`);
  console.log(`Number of students in SWE: ${all_SWE.length}. List: ${arr_to_string(all_SWE)}`);
}

function ORM (data) {
  allObjects = [];
  lines = data.trim().split('\n');
  clmNmaes = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    values = lines[i].split(',');
    allObjects[i] = {};
    for (let j = 0; j < values.length; j++) {
      allObjects[i][clmNmaes[j]] = values[j];
    }
  }

  return allObjects;
}
function get_by (data, key, value, filter_key = null) {
  query_objects = [];
  for (const obj of data) {
    if (obj) {
      if (obj[key] === value) {
        if (!filter_key) { query_objects.push(obj); }
        query_objects.push(obj[filter_key]);
      }
    }
  }
  return query_objects;
}
function arr_to_string (arr = []) {
  str = '';
  x = 0;
  for (const Idx of arr) {
    if (x) { str += ', '; }
    str += Idx;
    x = 1;
  }
  return str;
}

module.exports = countStudents;
