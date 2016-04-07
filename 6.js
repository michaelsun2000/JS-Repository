function foo(arr) {
    var a1 = -Infinity, a2 = -Infinity;
    arr.forEach(function(num) {
        if (num > Math.min(a1, a2)) {
            if (a1 < a2) {
                a1 = num;
            } else {
                a2 = num;
            }
        }
    });
    //return (Math.min(a1, a2));
    //correction:
    return (Math.max(a1, a2));
    // this function is returning the max number in an array.
}

var test =[5,6,3,2,1,12,56,21,89,12,3,4,5];
var result = foo(test);
console.log(result);


