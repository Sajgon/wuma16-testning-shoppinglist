// Import the GroceryListTest class
let GroceryList = require('./grocery-list');
let GroceryListItem = require('./grocery-list-item');


// Tillåtna kategorier
var itemCategories = ["Frukt", "Grönsak", "Kött", "Mejeriprodukt", "Krydda", "Övrigt"];
// En random tillåten kategori
var randomItemCategory = itemCategories[Math.floor(itemCategories.length*Math.random())];

// Ola Test
let a = new GroceryList('Första Listan');
a.addItem('Punk IPA', 1, 'Matvaror att köpa',);
a.addItem('Plommon', 120, 'Matvaror att köpa');
a.addItem('Väska', 120, 'Saker att köpa');
a.removeItem('Plommon');

console.log(a);

let b = new GroceryListItem('väska');

console.log(b);



//a.addItem('Päron', 'Frukt', 4);
//a.addItem('Is', randomItemCategory, 5);

