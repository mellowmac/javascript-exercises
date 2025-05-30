const repeatString = function(string, num) {
let totalStr='';


        for (let i = 0; i < num; i++) {
            totalStr += string        
        }
        return totalStr
}

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
