/**
 * Created by Michael on 2016-03-14.
 */


var y = 1;
console.log(eval(function f(){}));

if (function f(){}) {
    y += typeof f;
}
console.log(y);

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        })();
    }
};
myObject.func();
var test = myObject.func;
test();