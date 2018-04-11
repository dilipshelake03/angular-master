import { Injectable } from '@angular/core';

@Injectable()
export class DemoServiceService {

  constructor() { }
  
  getName(){
      return "Hello Champ";
  }

}
