// import User from "./06classjs.js"
const User = require("./06classjs.js");

const apoorv = new User("apoorv","apnegi07@gmail.com");

console.log(apoorv.getInfo());
apoorv.enrollCourse("react js");
apoorv.enrollCourse("angular js");

console.log(apoorv.getCourseList());