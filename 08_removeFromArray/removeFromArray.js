const removeFromArray = function(arr,num) {
    const n = arr.indexOf(num)
    if (num > -1){
        arr.splice(n, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
