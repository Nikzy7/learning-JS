var User = function(firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getCourseCount = function() {
        console.log(`Course count is  ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`your firstname is ${this.firstName}`);
}

var apoorv = new User("apoorv",2);
// console.log(apoorv);

var hitesh = new User("hitesh",1);
// console.log(hitesh);

/*
apoorv.getCourseCount();
hitesh.getCourseCount();
apoorv.getFirstName();
hitesh.getFirstName();
*/

// to check if the object has property
if (hitesh.hasOwnProperty("firstName")){
    hitesh.getFirstName();
}