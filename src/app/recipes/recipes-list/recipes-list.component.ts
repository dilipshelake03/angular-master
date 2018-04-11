import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Test Recipe', 'This is for Test', 'https://image.rewardme.in/Assets/Modules/Editorial/Recipe/Images/authentic-eid-al-fitr-chicken-biryani-2-size-3.jpg'),
      new Recipe('Test2 Recipe', 'This is for Test', 'https://image.rewardme.in/Assets/Modules/Editorial/Recipe/Images/authentic-eid-al-fitr-chicken-biryani-2-size-3.jpg'),
      new Recipe('Biryaani', 'This is for Test', 'https://image.rewardme.in/Assets/Modules/Editorial/Recipe/Images/authentic-eid-al-fitr-chicken-biryani-2-size-3.jpg'),
      new Recipe('Biryaani3', 'This is for Test', 'https://image.rewardme.in/Assets/Modules/Editorial/Recipe/Images/authentic-eid-al-fitr-chicken-biryani-2-size-3.jpg'),
      new Recipe('Dum Biryaani', 'This is for Test', 'https://image.rewardme.in/Assets/Modules/Editorial/Recipe/Images/authentic-eid-al-fitr-chicken-biryani-2-size-3.jpg')
  ]; 
  constructor() { }

  ngOnInit() {
  }
}
