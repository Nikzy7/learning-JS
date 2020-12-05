var myMap = new Map();

myMap.set(1,"uno");
myMap.set(2,"dos");
myMap.set(3,"tres");
myMap.set(4,"cuatro");

// console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`Key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// }

for(let [key,value] of myMap){
    console.log(`key is ${key} and value is : ${value}`);
}

// for each in maps gives values
myMap.forEach( (value) => console.log(value));

// check this
myMap.forEach( (value,key) => console.log(`key is ${key} and value is : ${value}`));

// to remove (use key)
myMap.delete(2);
console.log(myMap);
