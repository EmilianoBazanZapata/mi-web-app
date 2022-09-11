import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {
  usuarios = ['Luis', 'Fernando', 'Maria'];
  usuarioNombre = '';
  visible = false;

  constructor() {
    setTimeout(() => {
      this.visible = true;
    }, 3000);
  }

  AgregarUsuario() {
    this.usuarios.push(this.usuarioNombre);
  }
}
