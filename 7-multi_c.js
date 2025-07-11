//take an argument
//print a sentence exactly the number of arguments
//C is fun
 
const { argv } = require('node:process');

const args = process.argv[2];

const num = Number(args);

if (Number.isNaN(num)) {
	console.log("Missing number of occurrences")
} else if (num > 0) {
              for(let i=0; i < num; i++) {
		      console.log("C is fun")
}}
