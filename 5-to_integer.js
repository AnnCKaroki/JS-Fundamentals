const { argv } = require('node:process');

const input = process.argv[2];

let num = Number(input);

if (!Number.isNaN(num)) {
	console.log(`My number: ${num}`)
} 
else {
        console.log("Not a number")
};
