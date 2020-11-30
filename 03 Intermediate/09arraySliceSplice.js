const myNumber = [23,24,25,55,66,77,87,98];

const result = myNumber.filter((num) => num > 55);

var users = ["Ted","Tim","Ton","Sam","Sor","Sod"];

console.log(users);

// slicing
console.log(users.slice(1,3));
console.log(users.slice(1,4));
console.log(users.slice(1));

//splicing
// users.splice(start_index, count, replace_with_this[]);
users.splice(1,2,"Hi");
console.log(users);