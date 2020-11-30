// another method to create a function in js
var getUserRole = function (name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            break;

        case "subadmin":
            return `${name} is subadmin with access to create and delete course`;
            break;

        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            break;

        case "user":
            return `${name} is user and can consume content`;
            break;

        default:
            return `${name} is trial user`;
            break;       
    }
}

console.log(getUserRole("apoorv","testprep"));

var getRole = getUserRole("sammy","user");
console.log(getRole);