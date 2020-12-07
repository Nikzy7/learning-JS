const uno = () => {
    console.log("I am one");
};

const dos = () => {
    setTimeout(() => {
        console.log("wooohoooo");
    },3000)
    console.log("I am dos");
};

const tres = () => {
    console.log("I am tres");
};

uno();
dos();
tres();
