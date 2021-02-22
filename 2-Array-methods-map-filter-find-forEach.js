const friendsAge = [10, 20, 30, 50];
const friends = ['Motiur', 'Jahangir'];
const products = [{
    id: 1,
    name: 'laptop',
    price: 500
}, {
    id: 2,
    name: 'mobile',
    price: 200
}, {
    id: 3,
    name: 'watch',
    price: 100
}];

//map
const name = products.map(product => product.name); // ek line e likle auto return hoy

const prices = products.map(pd => pd.price);
const prices2 = products.map(pd => {
    return pd.price; //  {} use korle bole diye return kore deya lage
});
//console.log(names);

// forEach
products.forEach(products => console.log(products.name))

// filter
const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper);

const removeItem = products.filter(pd => pd.id != 3);
// console.log(removeItem);


// find
const hasWatch = products.find(pd => pd.name === 'watch')
// console.log(hasWatch);


// reduce, includes =  kisu din pore janbo, push, pop,lenght, indexOf