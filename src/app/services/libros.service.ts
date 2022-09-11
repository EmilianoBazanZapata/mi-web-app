export class LibrosService {
  private libros = ['Libro de Matematicas',
                    'Libro Grafico',
                    'Libro de Terror'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
