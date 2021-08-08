import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // cambiarNombre(event: any) {  Asociado a la primera forma de hacerlo que es más tediosa
  //   console.log(event.target.value);
  // }

  // Método llamado cuando recibimos el evento onNuevoPersonaje emitido por del componente hijo (agregar component) y para recibir la información mutada de parte del componente hijo debemos indicar en el template del componente padre (main-page.component.html) que la función recibe el parámetro $event. Como siempre que se emite un evento y se necesitan sus caracteristicas, los valores del input, el target, etc se hace con $event en los parametros de la función. El argumento $event es de tipo Personaje y ya podemos añadirlo al array
  // agregarNuevoPersonaje(personaje: Personaje) {
  //   // console.log('Main page component');
  //   // console.log(personaje);
  //   this.personajes.push(personaje);

  // }

  constructor() {

  }
}
