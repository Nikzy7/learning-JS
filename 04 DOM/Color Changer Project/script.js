const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

var getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

/*
console.log(getBGColor(pink));
console.log(getBGColor(red));
console.log(getBGColor(orange));
console.log(getBGColor(cyan));
console.log(getBGColor(violet));
*/

/*
var orangeColor = getBGColor(orange);

orange.addEventListener('mouseenter',() =>{
    center.style.background = orangeColor;
})
*/

var shifter = (el) =>{
    var color = getBGColor(el);
    return el.addEventListener('mouseenter',() =>{
        center.style.background = color
    })
};

shifter(red);
shifter(cyan);
shifter(violet);
shifter(pink);
shifter(orange);