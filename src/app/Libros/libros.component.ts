import { Component } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {

  libros = new Array();

  constructor(private librosService: LibrosService) {
    this.libros = librosService.obtenerLibros();
  }

  eliminarLibro(libro: string) {}

  guardarLibro(f: { valid: any; }) {
    if (f.valid) {
    }
  }
}
