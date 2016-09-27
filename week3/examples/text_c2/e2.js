for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

// var n = 0;

// while (n < 100){
//   if (n % 15 == 0){
//     console.log('fizzbuzz');
//   } else if (n % 5 == 0){
//     console.log('fizz');
//   }else if (n % 3 == 0){
//     console.log('buzz');
//   }else {
//     console.log(n);
//   }
//   n++;
// }
