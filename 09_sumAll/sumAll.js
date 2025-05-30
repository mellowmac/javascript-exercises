const sumAll = function(int1, int2) {
let sum = 0;
    const list = [];
    let b = int1;
    let c = int2;


    for (let i = b; i <= c; i++) {
            list.push(i);
    }
   
    for (let i = c; i <= b; i++) {
            list.push(i);
        
        }
   
    
    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
   
    return sum
};

// Do not edit below this line
module.exports = sumAll;
