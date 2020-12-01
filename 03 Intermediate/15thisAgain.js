// for all regular function calls, "this" points to the window object


console.log(this);

var user = {
    firstName : "apoorv",
    lastName : "negi",
    courseCount : 4,
    getCourseCount : function(){
        console.log("line 8",this);
        function sayHello(){
            console.log("Line 10",this);
        }
        sayHello();
    }
};

user.getCourseCount();