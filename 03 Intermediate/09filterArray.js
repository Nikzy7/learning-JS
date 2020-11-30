var testArray = [2,4,6,3,2,5,9,8];

// console.log(testArray.fill("h",2,5));
console.log(testArray.fill("empty"));

const myNumber = [23,24,25,55,66,77,87,98];

const result = myNumber.filter((num) => num!=55);
console.log(result);

const res2 = myNumber.filter((num) => num > 55);
console.log(res2);