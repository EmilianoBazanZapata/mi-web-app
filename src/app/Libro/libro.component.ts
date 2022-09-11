import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: 'Libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro!: string;
}
