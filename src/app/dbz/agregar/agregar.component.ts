import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {

  }

  // El decorador de propiedad opuesto al @Input es el @Output que es utilizado cuando tenemos un componente hijo (agregar component) y el mismo necesita emitir un valor al componente padre (main-page component). Es como cualquier otro evento, un evento personalizado que cuando ocurra en este componente (agregar component) el padre sea capaz de reaccionar a ese evento.
  // Cuando obtengo el nuevo data this.nuevo, es el momento de realizar la emisión del evento al componente padre para ello creamos el decorador @Output que se importa de @angular/core. Se le pone un nombre al evento, en este caso onNuevoPersonaje que es del tipo especial EventEmitter que también se importa de @angular/core. Esto a de ser asignado con un new EventEmitter(). El tipo indicado EventEmitter es un genérico indicando que puede ser cualquier cosa que queramos. Pero en nuestro caso vamos ha emitir un <Personaje> por lo que hemos de importar la interfaz Personaje.
  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // console.log(this.nuevo);

    // Tras obtener el nuevo data this.nuevo utilizamos el eventemitter onNuevoPersonaje con el método emit que puede emitir un valor que es opcional es decir puede emitir un Personaje o undefined, emitimos el this.nuevo y lo acepta perfectamente puesto que nuevo es de tipo Personaje, si emitimos por ejemplo un string nos daria un error. Esto es todo por parte del componente hijo, despues hay que volver al componente padre (main-page component) al template main-page.component.html y trabajar ese evento.
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 }

  }



}
