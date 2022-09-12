import { Subject } from 'rxjs';

export class LibrosService {
  librosSubject = new Subject();

  private libros = ['Libro de Matematicas', 'Libro Grafico', 'Libro de Terror'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(null);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
