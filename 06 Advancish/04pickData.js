/*
// const user = ["apoorv",3,"Admin"];
// // var role = user[2];
// // var name = user[0];

// this kind of destructuring will work fine in arrays

// var [name,courseCount,role] = user;

// console.log(name);
// console.log(courseCount);
// console.log(role);
*/
var myUser = {
    name : "apoorv2",
    courseCount : 3,
    role : "user",
};

// for objects, the destructuring variable names hsould be the same as keys
// otherwise it will be undefined, see example below
// const {name,mycourseCount,role} = myUser;
// console.log(mycourseCount);

// it should be 
const {name,courseCount,role} = myUser;
console.log(courseCount);

