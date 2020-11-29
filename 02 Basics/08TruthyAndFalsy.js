// todo: falsy
// undefined
// 0
// NaN
// ''
// null
// all these values are falsy, any value other than these are truthy

var user = null;

if(user){
    console.log("condition is true");
}

// Coercion
var u = "2";

// will evaluate to true because of coercion
if(2==u){
    console.log("it happened !");
}

// to clear this problem
// use === to also compare data type
if (2===u){
    console.log("it happened again !");
}
