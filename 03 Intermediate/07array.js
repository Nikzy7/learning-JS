var countries = ["indis","USA","Japan","Russia"];

var states = new Array("Rajasthan","Delhi","Mumbai","Assam");

console.log(states);

console.log(states.length);

states[0] = "Punjab";
console.log(states);

var user = ["apoorv","apnegi07@gmail.com",3,34,true];
console.log(user);

user.pop();
user.pop();
console.log(user);

user.unshift("NEW Value");
console.log(user);

// remove element from front (left)
user.shift();
console.log(user);

console.log(user.indexOf(3));
console.log(user.indexOf("apoorv"));
// element not in array will return -1
console.log(user.indexOf("new"));

console.log(Array.from("apoorv"));