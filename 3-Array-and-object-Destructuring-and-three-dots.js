// Array Destructuring
const numbers = [54,92,30,65];
// const x = numbers[0];
// const y = numbers[1];

// const [x,y] = [54,92];

// const [x,y] = numbers; // number array er first 2 value x,y e jbe

console.log(x,y);


// Array Destructuring view in function
function boxify(num1){
    return [num1, num1 +5 ];
}
// const boxed = boxify(5);
const [box1, box2] = boxify(5) //  same work likes provious line
// console.log(boxed);
console.log(box1, box2);


// Object Destructuring
const person = {name:'Rahim', age:25};
console.log(person.name,  person.age)
console.log(person.name,  person.age)
console.log(person.name,  person.age)

// make simple
const {name, age,id} = {id:2, money:50, name:'Rahim', age:25}; // {name,age} = nam mil raikha variable hoiya jai like, name er value name e gase, ar age gase age e
console.log(name,age);
console.log(name,age);
console.log(name,age);

const person = {name, age,id} = {id:2, money:50, name:'Rahim', age:25}; // aager tar moto
const{money} = person;
console.log(money);


// create object shortcut
const one = 25;
const two = 35;
const obj = {x:x,y:y};
const obj2 = {one,two}; // variable name ar jdi property er name same hole ei vabe likha jai
console.log(obj2);


// three dots
// numbers.push(56)
const newNumbers = [...numbers, 56]; // make new array and add new value
