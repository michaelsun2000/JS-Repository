/**
 * Created by Michael on 2016-04-06.
 */
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

//from myObject.func():
/*
outer func:  this.foo = bar      ==>  from line#8
outer func:  self.foo = bar      ==>  from line#9
inner func:  this.foo = undefined ==> from line#10: this references anonymous function, so this.foo is undefined
inner func:  self.foo = bar      ==>  from line#12: self is assigned by this and it references myObject, so bar is printed out.
*/

/* from test()
Now this and self are referencing to function itself which doesn't have foo defined, so all log statements
are printing out 'undefined'.
/*
outer func:  this.foo = undefined
outer func:  self.foo = undefined
inner func:  this.foo = undefined
inner func:  self.foo = undefined
 */


/*
function X(）{
    this.A = function(){console.log('A')};
}

X.prototype.B =  function(){
    console.log('B')
    X.A();
};

X.prototype.B();
*/

