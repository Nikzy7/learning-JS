// Allow user to access course if he is
// logged in from email
// logged in from google
// logged in from facebook

var email = true;
var facebook = false;
var google = false;

if(email || facebook || google){
    console.log("Login Success ! ");
}