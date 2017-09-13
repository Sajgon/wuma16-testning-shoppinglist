let GroceryListItem = require('./grocery-list-item');

module.exports = class GroceryList {

    constructor(name) {

        if (typeof name !== "string" || name === "") {
            throw new Error("A list must have a name that is an non-empty string.");
        }

        this.name = name;
        this.items = [];
    }

    addItem(name, quantity, category) {

        // lägga till matvaror i sin shoppinglista.
        // namn, kvantitet och kategori (Grönsaker, Frukt etc), samt bought = false
		
        let newItem = new GroceryListItem(name, quantity, category);
        this.items.push(newItem);
    }

    removeItem(itemName) {
        // ta bort matvara i sin shoppinglista.

        let filteredArray = this.items.filter((item) => {
            return item.name.indexOf(itemName);
        });

        this.items = filteredArray;

    }

    buy(itemName) {
        // markera varor som köpta
		
    }

}
