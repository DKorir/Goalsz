import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:string[];

  constructor(){
    this.goals =  [ 'watch finding nemo','buy cookies','get new phone case']
  }
  
}
