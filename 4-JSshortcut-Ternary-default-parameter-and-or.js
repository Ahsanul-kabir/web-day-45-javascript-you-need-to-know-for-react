// const money = 150;
// let food;
// if(money > 100){
//     food = 'biriyani';
// }else{
//     food = 'alur vorta';
// }

// Ternary Operator
// condition ? true value : false value
let food = money > 100 ? 'biriyani' : 'alur vorta';


const active = true;
// if(active === true){
//     cssClass = "active";
// }
// else{
//     cssClass = "inactive";
// }

// Ternary Operator
const cssClass = active ? 'active' : 'inactive'; // true/false hole hole oi "active" er moto likhe dile hobe


// fucction call shortcut alternative
active ? displayUser() : hideUser()


//

const active = true;
active && displayUser() // mne active true hole fuction er kase jbe
active || displayUser() // mne active false hole fuction er kase jbe nah hole active = true dekhabe


const x = active && 5;
console.log(x) // ouput = 5 bcoz, output active === true

active2 = false;
const x = active && 5;
console.log(x) // ouput = false



const x = active || 5;
console.log(x) // output = true

active2 = false;
const x = active || 5;
console.log(x) // ouput = 5


// string to number
const number = + '45';

// number to string
const number = 45 + '';



//
function add(num1, num2 = 10){
    return num1 + num2;
}
const addSum = add(45)
//
function add(num1, num2){
    // num2 = num2 || 5;    // defaut hisabe parameter e nah ei vabe o deya jai
    return num1 + num2;
}
const addSum = add(45)