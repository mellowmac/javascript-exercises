function fibonacci(num) {
   let sum;
   let num1 = 0;
   let num2 = 1;

   if (num === 0) {
        num1 = 0;
        num2 = 0;
   } else if (num === 1) {
        num2 = 1;
}
    for (let i = 1; i < num; i++){
        sum = num1 + num2;
            console.log(sum);
        num1 = num2;
            console.log(num1);
        num2 = sum;
            console.log(num2);

    }
     return num2
}

// Do not edit below this line
module.exports = fibonacci;
