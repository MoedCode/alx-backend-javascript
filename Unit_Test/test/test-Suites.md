#!/usr/bin/env node
const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const countStudents = require('../students');

describe('Suite: countStudents Function Tests', function () {
  it('should count students and log the correct output', function () {
    const filePath = 'path/to/nope.csv';
    const fileContent = `firstname,lastname,age,field
    Johann,Kerbrou,30,CS
    Guillaume,Salou,30,SWE
    Arielle,Salou,20,CS
    Jonathan,Benou,30,CS
    Emmanuel,Turlou,40,CS
    Guillaume,Plessous,35,CS
    Joseph,Crisou,34,SWE
    Paul,Schneider,60,SWE
    Tommy,Schoul,32,SWE
    Katie,Shirou,21,CS`;

    sinon.stub(fs, 'readFileSync').returns(fileContent);
    sinon.stub(console, 'log');

    countStudents(filePath);

    expect(console.log.calledWith('Number of students: 10')).to.be.true;
    expect(console.log.calledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')).to.be.true;
    expect(console.log.calledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.be.true;

    console.log.restore();
    fs.readFileSync.restore();
  });

  it('should throw an error if the file does not exist', function () {
    sinon.stub(fs, 'existsSync').returns(false);

    expect(() => countStudents('invalid/path.csv')).to.throw('Cannot load the database');

    fs.existsSync.restore();
  });

  it('should throw an error if the path is not a file', function () {
    sinon.stub(fs, 'statSync').returns({ isFile: () => false });

    expect(() => countStudents('invalid/path.csv')).to.throw('Cannot load the database');

    fs.statSync.restore();
  });
});
