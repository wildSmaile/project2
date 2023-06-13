import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  menu: string ="raclette party ";
  isThisIngredientVital : boolean = true;
  isGuestListDisplayed : boolean = true;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
}
