## 1 Prototypes & Inheritance

## 1.1 Object Prototypes

### 1.1.1 __proto__

All JavaScript objects have a `__proto__`. Browsers implement prototypes through the property.

### 1.1.2 prototype

Function also have a `prototype` property.

The `__proto__` property is a reference to another object that has several properties on it.

A couple of important points:
- The `__proto__` of an object literal is equal to `Object.prototype`.
- The `__proto__` of `Object.prototype` is `null`.

### 1.2 The Prototype Chain

When we look for a property of an object, the JavaScript engine will first check the object itself for the existence of the property. If not found, it will go to the object's prototype and check that object, If found, it'll use, otherwise, it’ll go to the prototype’s prototype, and on and on until an object with `__proto__` equal to `null`.

### 1.3 hasOwnProperty

It’ll return `true` or `false` based on whether the object itself contains the property being tested.

### 1.4 Function prototypes

Functions all have a `prototype` property distinct from `__proto__`. A function’s `prototype`'s `__proto__` property is equal to `Object.prototype`. In other word:

```
function fn() {}
fn.prototype.__proto__ === Object.prototype  // true
```

### 1.4.1 Function Prototypes and 'new'

When we invoke a function using `new`, the object bound to this in the constructor function is special. The `new` keyword sets the object’s `__proto__` to be the `prototype` property of the constructing function.

```
function Fn() {}
var foo = new Fn()
foo.__proto__ === Fn.prototype  // true
obj.__proto__.__proto__=== Object.prototype // true
```
### 1.5 constructor

Every function’s `prototype` has a `constructor` property on it that points back to the function itself.

```
function Fn() {}
Fn.prototype.constructor === Fn // true
```

### 1.6 Object.create

There’s a way to set the prototype of an object manually.  `Object.create`. This function will take in an object as a parameter. It’ll return a brand new object whose `__proto__` property is equal to the object that was passed in.

```
var prototypeObj = {
    testValue: 'Hello!'
};
var obj = Object.create(prototypeObj);
obj.__proto__ === prototypeObj; // true
```

### 1.7 class & prototype

> class based 和 prototype based 在表达能力上是等价的。

### summary

inheritance in JavaScript is implemented through the prototype chain.

Every normally created object, array, and function has a prototype chain of `__proto__` properties ending with `Object.prototype` at the top.

*[Master JavaScript Prototypes & Inheritance](https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e)
*[10 JavaScript concepts you need to know for interviews](https://dev.to/arnavaggarwal/10-javascript-concepts-you-need-to-know-for-interviews)
