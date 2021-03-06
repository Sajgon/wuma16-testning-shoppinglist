module.exports = class GroceryListItem {

    constructor(name, quantity, category) {

        if (typeof name !== "string" || name === "") {
            throw new Error("A list item must have a name that is a non-empty string.");
        }

        if (isNaN(quantity || quantity <= 0)) {
            throw new Error("A list item must have a quantity that is a number.");
        }

        if (typeof category !== "string" || category === "") {
            throw new Error("A list item must have a category that is a non-empty string.");
        }

        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.bought = false;
    }

}
