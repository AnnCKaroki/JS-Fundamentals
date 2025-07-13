//argument is int
//if NaN factorial = 1
//use recursion
//use a function
//console.log to print all output

const num = process.argv[2];
const parsed = Number(num);

function Factorial(n) {
  if (isNaN(n) || n === undefined) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * Factorial(n - 1);
}

console.log(Factorial(parsed));
