// for of loop
const names = ["youtube","facebook","instagram","netflix","amazon"];

for(const n of names){
    console.log(n);
}

// for in loop

const symbols = {
    yt : "youtube",
    ig : "instagram",
    fb : "facebook",
    lco : "learncodeonline",
};

for(const n in symbols){
    console.log(`key is ${n} and the value is : ${symbols[n]}`);
}