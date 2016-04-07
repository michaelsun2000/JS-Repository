function max(){
    var result;
    var inputNumbers = [];

    for (var i = 0; i < arguments.length; i++) {
        var input = arguments[i];
        if (isNumber(input)) {
            inputNumbers.push(arguments[i]);
        }else{
            console.log(input + " is not a number.");
            break;
        }


    }
   return Math.max.apply(null,inputNumbers);
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var maxNumber = max(5,26,10);
console.log(maxNumber);

maxNumber = max(5,'t',10);
console.log(maxNumber);