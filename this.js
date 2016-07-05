var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m());

var p = Object.create(o);

p.a = 12;

console.log(p.m());
// When calling o.m in this case, 'this' refers to o
// p is an object that inherits from o
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o,
// 'this.a' means p.a, the own property 'a' of p

var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype.
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays inherit from Array.prototype
// (which has methods like indexOf, forEach, etc.)
// The prototype chain looks like:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Functions inherit from Function.prototype
// (which has methods like call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
