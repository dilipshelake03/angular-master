import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector : 'app-shopping',
    templateUrl : './shopping.component.html'
})
    
export class ShoppingComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 15),
        new Ingredient('Orange', 50),
        new Ingredient('Pineapple', 50),
    ];
    
    constructor(){}
    
    //title = "Champ";
}

