import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // Para pasar la información de los personajes del componente padre (main-page) al componente hijo (personajes), utilizamos un decorador en el componente hijo el decorador @Input para indicar que personajes viene del componente padre

  // @Input()
  // personajes: Personaje[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {

  }


}
