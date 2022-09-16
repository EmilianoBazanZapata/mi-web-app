import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import { LibrosComponent } from './Libros/libros.component';
import { LibroComponent } from './Libro/libro.component';
import { InicioComponent } from './inicio.component';

import { LibrosService } from './services/libros.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule],
  providers: [LibrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
