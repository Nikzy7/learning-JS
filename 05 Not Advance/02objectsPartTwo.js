var User = {
    name : "",
    getUserName : function() {
        console.log(`users name is : ${this.name}`);
    },
};

var apoorv = Object.create(User);
console.log(apoorv);
apoorv.name = "apoorv negi";
apoorv.getUserName();

var sam = Object.create(User,{
    name : {value : "Sammy"},
    courseCount : {value : 3},
});

console.log(sam);