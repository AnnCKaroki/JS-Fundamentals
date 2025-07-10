const {argv} = require('node:process');

const args = process.argv

//no arguments = no arguments
//no length, myVar

if (args[2] === undefined) {
	console.log("No argument")
} else 
	console.log(process.argv.slice(2).join(' '))





