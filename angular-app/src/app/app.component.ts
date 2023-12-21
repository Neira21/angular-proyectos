import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  //templateUrl: './app.component.html',
  template: `<h1>Angular App, Hola mundo</h1>`,
  //styleUrl: './app.component.css'
  styles: `
    h1{
      font-family: Arial, Helvetica, sans-serif;
    }
  `
})
export class AppComponent {
  title = 'angular-app';
}
