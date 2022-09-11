import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent {
  libros = ['Harry Potter', 'Matematica I', 'Star Wars'];

  eliminarLibro(libro: string) {
    this.libros = this.libros.filter((p) => p !== libro);
  }

  guardarLibro(f) {
    if (f.valid) {
      this.libros.push(f.value.nombreLibro);
    }
  }
}
