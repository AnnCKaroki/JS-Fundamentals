//take size of square
//missing size if not convertible to number
//print using x

const {argv} = require('node:process');

const input = process.argv[2];

const num = Number(input)

if (Number.isNaN(num)) {
        console.log("Missing size")
} else if (num > 0) {
     for (let i = 0; i < num; i++) {
        console.log("X".repeat(num))
     }
}
