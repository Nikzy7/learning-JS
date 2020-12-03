var User = function(firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getCourseCount = function() {
        console.log(`Course count is  ${this.courseCount}`);
    };
};

var apoorv = new User("apoorv",2);
console.log(apoorv);

var hitesh = new User("hitesh",1);
console.log(hitesh);