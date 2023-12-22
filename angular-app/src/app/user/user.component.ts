import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userName = 'Alvaro Neira'
  isLogged = false //Funciona como un state
  favGame = ''

  getFavorite(gameName:string){
    this.favGame = gameName
  }


  greetUser(){
    alert('Hello ' + this.userName)
  }
}
