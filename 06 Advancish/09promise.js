const uno = () => {
   return "I am one";
};

// const dos = async () => {
//     setTimeout(() => {
//         console.log("wooohoooo");
//     },3000)
// };

const dos = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("i am two");
        },3000);
    });
};

const tres = () => {
    return "I am three";
};

const callMe = async() => {
    let valOne = uno();
    console.log((valOne));

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();
