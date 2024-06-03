#!/usr/bin/env node
const displayMessage = console.log
module.exports =  displayMessage
if (require.main === module ){
    displayMessage("Hello NodeJS!");
}