const apoorv = {
    firstName : "apoorv",
    lastName : "negi",
    role : "admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
            first Name is ${this.firstName}
            last name is ${this.lastName}
            his role is ${this.role}
            and he is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "sub-admin",
    courseCount : 4,
};

/*
apoorv.getInfo();
dj.getInfo();
*/

// binds it
var djInfo = apoorv.getInfo.bind(dj);
djInfo();


// calls it
apoorv.getInfo.call(dj);