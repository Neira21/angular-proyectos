import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styles: ``
})
export class GamesComponent {
  @Input() userName = ''
  @Output() addFavorite = new EventEmitter<string>()

  fav(gameName:string){
    this.addFavorite.emit(gameName)
  }

  games=[
    {
      id: 1,
      name: 'Super Mario Bros',
    },
    {
      id: 2,
      name: 'Zelda',
    },
    {
      id: 3,
      name: 'Pokemon',
    }
  ];


}
