// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
/* export class ListadoComponent implements OnInit {

  /* constructor() {
    console.log('constructor'); // El constructor se ejecuta antes de la renderización del componente
  } */

  /* ngOnInit(): void {
    console.log('ngOnInit'); // Se dispara despues del constructor, normalmente se utiliza para inicializar cosas como por ejemplo si se hace una petición a algún servicio, y se trae la información
  } */
/*
} */
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
