import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros = new Array();
  constructor(private librosService: LibrosService) {}
  private libroSusbcription: Subscription = new Subscription;

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    this.libroSusbcription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSusbcription.unsubscribe();
  }

  eliminarLibro(libro: string) {}

  guardarLibro(f: { valid: any; value: { nombreLibro: string } }) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }
}
