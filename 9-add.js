const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

function addNumbers(a, b) {
  return a + b;
}

if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
  console.log(addNumbers(num1, num2));
} else {
  console.log("NaN");
}

