import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TablaAlumnosComponent } from './componentes/tabla-alumnos/tabla-alumnos.component';
import { TablaCursosComponent } from './componentes/tabla-cursos/tabla-cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TablaAlumnosComponent, TablaCursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  cursos:boolean = true

  handleCambio(){
    this.cursos = !this.cursos
  }

}
