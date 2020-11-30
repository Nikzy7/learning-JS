/*
function isEven(element){
    if(element%2===0){
        return true;
    } else {
        return false;
    }
}
*/
/*
function isEven(element){
    return element%2===0;
}
*/

var isEven = (element) => {
    return element%2 === 0;
}

// console.log(isEven(3));

var result = [2,4,6,8].every(isEven);
console.log(result);

var res2 = [2,3,4,6,8].every(isEven);
console.log(res2);

// writing callbacks
var res3 = [2,4,6,8].every((e) => (e%2===0));
console.log(res3);