// net e o object ke json e ney jai....JSON formater and validation diya search dile  pabo

// JSON
const person = {
    name:'Abdul',
    age:25
};
data = JSON.stringify(person)  //  object convery to json

// JSON convert back and forth
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);

// API fetch
fetch(url)
.then(res => res.json())
.then(data => console.log(data));


// local storage
// localStorage.setItem('userId',1245)  // local storage e value nije set korte caile
//const userId = localStorage.getItem('userId');  // local storage theke value fetch korte caile
// console.log(userId);


localStorage.setItem('person',JSON.stringify(person));
const storedPerson = localStorage.getItem('person')
console.log(storedPerson);


const persePerson = JSON.parse(storedPerson);
console.log(persePerson.age);


const keys = Object.keys(persePerson);
console.log(keys);

const values = Object.values(persePerson);
console.log(values);
