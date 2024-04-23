import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { Alumno } from '../../models/alumno-to-ts';

@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent implements OnInit {
  public alumnos?:Alumno[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.alumnos = alumnos
  }
}
