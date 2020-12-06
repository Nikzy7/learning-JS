// ...args

// console.log(Math.max(2,4,5,6,8,9,7,5,2,3));

// var myObj = {};

// Object.assign(myObj,{a:1,b:2,c:3},{z:9,y:8,x:7});
// console.log(myObj);

function sum1(a,b){
    return a+b;
}

console.log(sum1(5,4));

var myA = [5,4];
console.log(sum1(myA));

// ignores last parameter
console.log(sum1(5,4,1));

// use spread operator as follows
var myArr = [5,10];
console.log(sum1(...myArr)); // spread operator
// will spread an array
// however, the last parameter will still be ignored (because function definition needs 2)
// see example below
console.log(sum1(...[5,4,1]));



// Rest operator
// kinda like **args of python

function sum2(...args){
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sum2(1, 2, 3, 4, 5));

// if used in a function with normal params and REST
// the params that were ignored earlier will be added 
// in args, see example below

function sum3(a,b,...args){
    let multi = a*b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }

    return [sum,multi];
}

console.log(sum3(1, 2, 3, 4, 5));