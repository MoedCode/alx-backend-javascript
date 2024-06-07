#!/usr/bin/env node

const assert = require('chai').assert

const countStudents = require('../countStudent')


// console.log("\n\n\n:::\n",countStudents());
const expVal = countStudents()
console.log(`\n\n\n __MY_TEST__  { EXPECTED : ${expVal  === countStudents()} }\n\n\n`);
describe('countStudents', function(){
    it('app should return number of students in each field', function(){
        assert.equal(countStudents("data.csv"), expVal)
    })
})






// const { json } = require('express');
// const fs = require('fs')
// const { v4: uuidv4 } = require('uuid');
// class User{
//     __file_path = "x.md"
//     constructor(userName, email=null){
//         this.id = uuidv4()
//         this.userName = userName;
//         email ? this.email = email : 1+1;

//     }
//     toJson = () => JSON.stringify(this, null, 2)
//     save = () => {
//         let jsonObj= this.toJson()
//         const saveFormat = `\n\`\`\`json\n"Users__${this.id}": ${jsonObj},\n\`\`\`\n`;
//         fs.writeFile(this.__file_path ,saveFormat,{flag:'a'}, (err)=>{
//             if(err) throw new Error(` \n :: read file issue \n${err}`) ;


//         })

//     }
// }

// const usr  = new User("natasha", "natasha@gmail.com")

// let arr = []
// arr[50000] = ""
// for (let i of arr)
//     usr.save()


// describe('User', function () {
//     describe('#save()', function () {
//       it('should save without error', function (done) {
//         var user = new User('Luna');
//         user.save(function (err) {
//           if (err) done(err);
//           else done();
//         });
//       });
//     });
//   });
C