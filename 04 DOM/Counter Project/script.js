var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

// first parameter : function
// second parameter : time (milliseconds)
setInterval(() =>{
    // if conditional to break
    if(count<1000){
        count++;
        counter.innerText = count;
    }
},10);

setTimeout(()=>{
    followers.innerText = "Followers on Instagram !";
},1000)