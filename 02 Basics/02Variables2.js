const uid = "abc123";
// Will throw error
// uid = "abcd1234";

var fullName = "Apoorv Negi";
var email = "apnegi07@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var coursCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter name");

console.log(uid);
console.log("fullname is: " + fullName);
console.log("fullname is: ", fullName);
console.log(email);

// interpolation
console.log(`
    With Unique id: ${uid}
    User is : ${fullName}
    email is : ${email}
    and password : ${password}
`);