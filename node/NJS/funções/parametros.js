// function soma(num1, num2) {
//     return num1 + num2;
// }

// console.log(soma(2, 2))
// console.log(soma(200, 245))

function multiplicar(multiplicador, ...args) {
    return args.map(x => multiplicador * x);
  }
  
  var arr = multiplicar(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]
  