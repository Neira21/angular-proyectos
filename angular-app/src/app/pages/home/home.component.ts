import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getUsuarios();
  }

  usuarios: WritableSignal<Usuario[]> = signal([])
  cargando= signal(false);

  async getUsuarios() {
    this.cargando = signal(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const resJson = await res.json()
    this.usuarios.set(resJson)
    this.cargando = signal(false)
  }
}

interface Usuario {
  id: number
  name: string
  username: string
  email: string
}

