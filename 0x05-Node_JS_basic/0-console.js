#!/usr/bin/env node
const displayMessage = console.log
export default displayMessage
if (require.main === module ){
    displayMessage("Hello NodeJS!");
}