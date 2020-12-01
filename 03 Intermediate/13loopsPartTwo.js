const myStates = ["Rajasthan","delhi","Uttarakhand","Uttar Pradesh","Assam"];

var i  = 0;

for (;;) {
    if(i>3)  break;
    console.log(i);
    i++;
}

// for each
myStates.forEach((s) => console.log(s));