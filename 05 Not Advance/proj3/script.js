const courses = [
    {
        name : "complete react js course",
        price : "2.3",
    },
    {
        name : "complete angular js course",
        price : "2.1",
    },
    {
        name : "complete MERN js course",
        price : "2.7",
    },
    {
        name : "complete C++ course",
        price : "2.8",
    },
];

function generateList(){

    const ul =document.querySelector(".list-group");
    ul.innerHTML = "";  // clearing the list
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);

        ul.appendChild(li);
    });
}

// generateList();

window.addEventListener('load',generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener('click',() => {
    courses.sort( (a,b) => a.price - b.price);
    generateList();
});

// adding course add system
// own assignment
const addButton = document.querySelector(".add-btn");
addButton.addEventListener('click',() =>{
    var textBox = document.querySelector(".course-add");
    var textInside = textBox.value;
    
    var textBoxPrice = document.querySelector(".course-add-price");
    var inputPrice = parseFloat(textBoxPrice.value);

    var newObj = {
        name : textInside,
        price : inputPrice,
    };

    courses.push(newObj);

    generateList();
});

// assignment given in video
const sortDescButton = document.querySelector(".sort-desc-btn");
sortDescButton.addEventListener('click',() => {
    courses.sort((a,b) => a.price - b.price);
    courses.reverse();

    generateList();
});
