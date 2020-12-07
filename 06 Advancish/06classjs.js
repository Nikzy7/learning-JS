class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    // kinda sets it as private
    #courseList = [];

    getInfo(){
        return {name:this.name,email:this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }

    login(){
        return "you are logged in";
    }

    // use this to prevent child from accessing a function from parent
    // static keyword
    // static login(){
    //     return "you are logged in";
    // }
}

// inheritance
class subAdmin extends User{
    constructor(name,email){
        super(name,email);
    }

    getAdminInfo(){
        return "I am subadmin";
    }

    login(){
        return "login for admin only";
    }
}

module.exports = User;

// const rock = new User("rock","rock@rock.com");
// console.log(rock.getInfo());
// rock.enrollCourse("angular bootcamp");
// console.log(rock.getCourseList())
// console.log(rock.courseList);

const tom = new subAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());