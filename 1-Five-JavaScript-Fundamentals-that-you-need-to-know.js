// variable: let, const

let money = 20; // let = changeble
money = 12;
let isConfident = false; // boolian data type
const name = 'Khalid'; // const = non changeable

const person = {
    name: 'khalid',
    age: 55,
    city: 'Dhaka'
}

const statement = `this person ${name} with age ${person.age}`;


// condition
if (money > 20 && age >= 20) {

} else {

}

// array
const friendsAge = [10, 20, 30, 50];
const respected = ['Motiur', 'Jahangir'];
const products = [{
    name: 'laptop',
    price: 500
}, {
    name: 'mobile',
    price: 200
}, {
    name: 'watch',
    price: 100
}];


// loor: for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}


// function: regular, arrow
function add(num) {
    return num1 + num2;
}

const result = add(45, 65);


// arrow function
// single variable
const fiveTimes = num => num * 5;

// multiple variable
const add2 = (num1, num2) => num1 + num2;   // auto return hoy

// multiple statement
const doMath = (x, y) => {
    const c = x + y;
    return c;   //  {} use korle bole diye return kore deya lage
}