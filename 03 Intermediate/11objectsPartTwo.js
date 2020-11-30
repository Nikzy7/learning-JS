var user = {
    firstName : "Apoorv",
    lastName : "Negi",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },
    // assignment
    info : function() {
        return `${this.firstName} ${this.lastName} has the role
            ${this.role}, logged in ${this.loginCount} times, facebook signin
            status is ${this.facebookSignedIn}`;
    }
};


console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular JS Course");
console.log(user.getCourseCount());
console.log(user.info());
