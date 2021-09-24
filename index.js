class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner{
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}

let breakfast = new Breakfast('Eggs', 'Coffee');

let lunch = new Lunch('House', 'Chicken Noodle', 'Water');

let dinner = new Dinner('Ceasar', 'Tomato', 'Chicken', 'Ice Cream');

console.log(breakfast);
console.log(lunch);
console.log(dinner);