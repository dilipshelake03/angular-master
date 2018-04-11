import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent{

  servers = []; 
  addIngridient(){
      this.servers.push("New Server");
  }
  
  onRemove(i){
      this.servers.splice(i, 1);
  }  
  constructor() { }
}
