/**
 * Created by Michael
 */

/// 1
function add(){
    var result=0;
    for (var i = 0; i < arguments.length; i++) {
        var input = arguments[i];
        if (isNumber(input)) {
            result = result + input;
        }else{
            console.log(input + " is not a number.");
            break;
        }
    }
    return result;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var result = add(1,2,'m');
console.log(result);

result = add(1,2,5,6);
console.log(result);

