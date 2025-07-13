//argument is int
//if NaN factorial = 1
//use recursion
//use a function
//console.log to print all output

const num = Number(process.argv[2]);

function Factorial(num) {
      if(num === 0) {
        return 1;
      } else {
         return num * Factorial(num-1);
      }
}

if (!Number.isNaN(num)) {
      console.log(Factorial(num))
} else {
      console.log("NaN");
}
