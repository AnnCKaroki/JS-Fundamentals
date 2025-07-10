const {argv} = require('node:process');

const args = process.argv

//no arguments = no arguments
//no length, myVar

if (args[2] === undefined) {
	console.log("undefined is undefined")
} else if (args[2] && args[3]) {
	console.log(`${args[2]} is ${args[3]}`)
} else if (args[2]) {
	console.log(`${args[2]} is undefined`)
}





