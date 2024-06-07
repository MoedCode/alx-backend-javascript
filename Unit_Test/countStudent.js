#!/usr/bin/env node
const fs = require('fs');

function countStudents(filePath="data.csv", stdout=false, toReturn=true) {
  // process.stdout.write(filePath)
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  const allObjects = ORM(data);
  const NUMBER_OF_STUDENTS = Object.keys(allObjects).length;

  const all_cs = get_by(allObjects, 'field', 'CS', 'firstname');
  const all_SWE = get_by(allObjects, 'field', 'SWE', 'firstname');
  if (stdout){
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    console.log(`Number of students in CS: ${all_cs.length}. List: ${arr_to_string(all_cs)}`);
    console.log(`Number of students in SWE: ${all_SWE.length}. List: ${arr_to_string(all_SWE)}`);
  }
  if(toReturn){
    return `
    Number of students: ${NUMBER_OF_STUDENTS}
    Number of students in CS: ${all_cs.length}. List: ${arr_to_string(all_cs)}
    Number of students in SWE: ${all_SWE.length}. List: ${arr_to_string(all_SWE)}
    `
  }
}

function ORM(data) {
  const allObjects = [];
  const lines = data.trim().split('\n');
  const clmNmaes = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    allObjects[i] = {};
    for (let j = 0; j < values.length; j++) {
      allObjects[i][clmNmaes[j]] = values[j];
    }
  }

  return allObjects;
}

function get_by(data, key, value, filter_key = null) {
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

function arr_to_string(arr = []) {
  return arr.join(', ');
}


module.exports = countStudents;
if (require.main === module) {
  if(process.argv && process.argv[2]) countStudents(process.argv[2]);
  else countStudents();

}
