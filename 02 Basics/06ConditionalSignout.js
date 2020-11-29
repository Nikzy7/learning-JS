// show user a signout button if he is authenticated,
// other wise show him option to login/signup

var authenticated = false;

/*
if(authenticated){
    console.log("show signout button");
}else{
    console.log("show login button");
}
*/

authenticated ? console.log("show signout") : console.log("show login");