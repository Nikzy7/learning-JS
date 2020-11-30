// function declarations are scanned and made available
// variable declarations are scanned and made undefined

tipper(5);

function tipper(a){
    var bill = a;
    console.log(bill+5);
}


var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill+15);
}

bigTipper(20);

console.log(name);
var name = "apoorv";
console.log(name);

