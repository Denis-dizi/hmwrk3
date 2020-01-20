console.log("started Fizz Buzz");
//====v1 =============================================
const fizzBuzz = num => {
    for(let i = 1; i <= num; i++) {
      // check if the number is a multiple of 3 and 5
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } // check if the number is a multiple of 3
        else if(i % 3 === 0) {
        console.log('fizz')
      } // check if the number is a multiple of 5
        else if(i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(i)
      }
    }
  }
  fizzBuzz(20);
//====v2================================================
//   for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }
//====v3================================================
// for (var i=1; i<=20; i++)(function(i){
//     var output = ""
//     if (i % 3 == 0)
//      output += "Fizz"
//     if (i % 5 == 0)
//      output += "Buzz"
//     console.log(output || i)
//   })(i)
//====v4================================================
// for (var i = 1; i <= 20; i++) {
//     var f = i % 3 == 0, b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
//   }
//====v5================================================
// for(i=0;i<20;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
//====v================================================
//====v================================================
//====v================================================