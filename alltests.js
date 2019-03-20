/**
 * Created by Michael on 2016-03-14.
 */



//1
var i=(function(x){
    delete x;
    return x;
})(1);

console.log(i);


//2

var foo = {
    bar: function() { return this.baz; },
    baz: 1
};

i=typeof foo.bar();
console.log(i);

i=(function() {
    console.log(arguments[0]);
    //console.log(this);
    return typeof arguments[0]();
})(foo.bar);

console.log(i);

//3

var foo = {
    bar: function() { return this.baz;},
    baz: 1
};

i=typeof (f=foo.bar)();
console.log(i);


//4.

(function(foo) {
    return typeof foo.bar;
})({ foo: { bar: 1 } });


/*
//5.

var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;

//6.

(function f() {
    function f() { return 1; }
    return f();
    function f() { return 2; }
})();

//7.

function f() { return f; }
new f() instanceof f;

//8.

var count = 0;

var timer = setInterval(function() {
    if (count < 5) {
        console.log('Timer call: ', count);
        count++;
    } else {
        clearInterval(timer);
    }
}, 100);

//9.

function X() {
    this.f = function() {
        return true;
    };
}

// Should return false, but will be overridden
X.prototype.f = function() {
    return false;
};

var x = new X();
x.f();

//10.

function X() { }

var x1 = new X();
X.prototype.f = function(){
    return false;
};

var x2 = new X();
x1.f();
x2.f();

//11.

function foo() {
    this.isLive = true;
}
foo();
alert(isLive);

//12.

var obj = {
    foo: function() {
        this.isLive = true;
    }
};
obj.foo();
alert(isLive);

//13.

var obj = {};
function foo() {
    return this;
}
alert(foo() == this);
alert(foo.call(obj) == obj);

//14.

function highest(){
    return arguments.sort(function(a, b) {
        return b - a;
    });
}

//15

Object.prototype.keys = function() {
    var keys = [];
    for (var i in this) {
        keys.push(i);
    }
    return keys;
};

var obj = { a: 1, b: 2, c: 3 };
alert(obj.keys());

//16.

isC2LSupported: function() {
    if(window.PsNavigate ||
        (window.interOp && window.interOp.postMessage) ||
        (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.interOp && window.webkit.messageHandlers.interOp.postMessage)) {
        return true;
    }
    return false;
}*/

//window.inter

var xhr = new XMLHttpRequest();
