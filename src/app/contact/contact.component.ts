import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  public usuario: any = {
    name: '',
    email: '',
  };

  enviar(): void {
    console.log(`Nombre: ${this.usuario.name} | Correo: ${this.usuario.email}`);
  }
}
