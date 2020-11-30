// kinda like dictionary in python ?

var user = {
    firstName : "Apoorv",
    lastName : "Negi",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.log(user);
console.table(user);


// assignment

var iPhone12_pro = {
    is_5G : true,
    numberOfCameras : 3,
    presentHeadphoneJack : false,
    displaySize : "6.1 inch",
    pixelDensity : "460ppi",
    processor : "A14 Bionic",
    price : 120000,
};

console.table(iPhone12_pro);