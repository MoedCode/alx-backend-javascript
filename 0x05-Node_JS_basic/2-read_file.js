#!/usr/bin/env node
import fs from 'fs';

function countStudents (filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(filePath, 'utf-8');

  const allObjects = ORM(data);
  const NUMBER_OF_STUDENTS = Object.keys(allObjects).length;

  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
  const all_cs = get_by(allObjects, 'field', 'CS', 'firstname');
  const all_SWE = get_by(allObjects, 'field', 'SWE', 'firstname');
  console.log(`Number of students in CS: ${all_cs.length}. List: ${arr_to_string(all_cs)}`);
  console.log(`Number of students in SWE: ${all_SWE.length}. List: ${arr_to_string(all_SWE)}`);
}

function ORM (data) {
  const allObjects = [];
  const lines = data.trim().split('\n');
  const clmNmaes = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const obj = {};
    for (let j = 0; j < values.length; j++) {
      obj[clmNmaes[j]] = values[j];
    }
    allObjects.push(obj);
  }

  return allObjects;
}

function get_by (data, key, value, filter_key = null) {
  const query_objects = [];
  for (const obj of data) {
    if (obj) {
      if (obj[key] === value) {
        if (!filter_key) {
          query_objects.push(obj);
        } else {
          query_objects.push(obj[filter_key]);
        }
      }
    }
  }
  return query_objects;
}

function arr_to_string (arr = []) {
  return arr.join(', ');
}

countStudents(process.argv[2]);
