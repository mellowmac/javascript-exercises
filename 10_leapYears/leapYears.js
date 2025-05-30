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





};

// Do not edit below this line
module.exports = leapYears;
