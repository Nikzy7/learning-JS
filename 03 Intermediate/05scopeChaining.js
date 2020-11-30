var name = "apoorv";
console.log("line number 2",name);

function sayName(){
    var name = "someName";
    console.log("line number 6",name);
    sayName2();

    function sayName2(){
        console.log("line 10",name);
    }
}

sayName();