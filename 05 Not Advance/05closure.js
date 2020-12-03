/*
function init(){
    var firstName = "apoorv";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();

value();
*/

function doAddition(x){
    return function(y){
        return x+y;
    };
}

var ans = doAddition(6);
console.log(ans(5));

console.log(doAddition(7)(5));