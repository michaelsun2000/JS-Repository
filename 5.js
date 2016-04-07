/**
 * Created by Michael on 2016-04-06.
 */
function sum(n) {
    return function (m){
     return n+m;
    }
        ;
}

var i = sum(3)(5);
console.log(i);