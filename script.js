'use strict';
/*
let value = prompt("Give me a number");

if(value > 0) {
    console.log("number is bigger than zero");
} else if (value < 0) {
    console.log("number is less than zero");
} else if (value == 0) {
    console.log("number is equal to zero");
}


let result = (a + b < 4) ?  'Below' : 'Over';



let message;
let login = prompt("Give me your position");

 (login == 'Employee') ? console.log("Hi") :
 (login == 'Director') ? console.log("Greetings"):
 (login == 'Manager') ? console.log("Hello"): console.log(" ");


let sum = +prompt('what is the sum???');

switch (sum) {
    case 4 + 5:
        console.log('sum is 9');
        break; 
    case 4 + 4:
        console.log('sum is not 9 but 8');
        break;
    case 4 + 3:
        console.log('sum is not 9 but 7');
        break;    
    case 4 + 2:
        console.log('sum is not 9 but 6');
        break;    
    case 4 + 1:
        console.log('sum is not 9 but 5');
        break; 
    default:
        console.log('sum is 9');


}




if (browser == 'Edge'){
    console.log("You got the Edge browser I see!!");
} else if (browser == 'Chrome' ||'Firefox' ||'Safari' ||'Opera') {
    console.log("We support those browsers too!");
} else {
    console.log("We hope that this page looks ok!");
}
*/
/*
let a = +prompt('The letter a is equal to');

switch (a) {
    case 0:
    console.log('number is 0');
    break;
case 1:
    console.log('number is 1');
    break;
case 2 :
case 3 :
    console.log('number is 2 or 3');  

}

const repeatString = function(string, num) { // returns 'heyheyhey'
        let totalStr='';
       

        for (let i = 0; i < num; i++) {
            totalStr += string        
        }
        return totalStr
}

console.log(repeatString('hey', 5));


const reverseString = function(string) {
const rev = string.split('').reverse().join('')
return rev;

};

console.log(reverseString("Let's say goodbye now"))
*/
/*


const removeFromArray = function(arr,num) {
   
    const n = arr.indexOf(num)
    
    if (num > -1){
        arr.splice(n, 1);
    }
    return arr;
};


console.log(removeFromArray([1,2,3,4,5,6,7,8],4));


const sumAll = function(int1,int2) {
    let sum = 0;
    const list = [];
    let b = int1;
    let c = int2;


    for (let i = b; i <= c; i++) {
            list.push(i);
    }
    console.log(list)

    
    
    
    for (let i = c; i <= b; i++) {
            list.push(i);
        
        }
    console.log(list)


    
    
    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
    console.log(list);

    return sum
};

console.log(sumAll(5,5));


const leapYears = function(year) {

let b = 0;


if (year % 4 == 0 && year % 4 != 1) {
    b = year / 4
    console.log(`${year} is a leap year`)
    return b = true
} else {
    b = year / 4
    console.log(`${year} is not a leap year`)
    return b = false
}


return b 

};

console.log(leapYears(1984));


const convertToCelsius = function(Fahrenheit) {
let fH = Fahrenheit;

fH = (fH.toFixed(1) - 32) * 5/9;
return fH;

};

console.log(convertToCelsius(50));



const convertToFahrenheit = function(Celcius) {
let cC = Celcius;

cC = (cC.toFixed(1) * 9/5 + 32);
return cC;

};

console.log(convertToFahrenheit(0));


const add = function(a,b) {
    return a + b;
	
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
    const array = [];


    const sumTotal = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue);

};

const multiply = function(a,b) {
    return a * b
};

const power = function(a, b) {
    return Math.pow(a, b)
};

const factorial = function(a) {
    let res = 1;
    for (let i = 1; i <= a; i++){
         res *= i;
    }
    
    return res

	
};

 function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
        console.log(i)
    }
    return res;
}
console.log(fact(4))

const palindromes = function (string) {
  const revStr = string.split("").reverse().join('');

  if (revStr === string) {
    return true;
  } else {
    return false;
  }

};

console.log(palindromes("racecar"));
*/
/*
const fibonacci = function() {

    
};

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
console.log(fibonacci(4));
*/

const getTheTitles = function() {

    


};
