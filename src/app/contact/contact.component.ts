import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formularioContacto: FormGroup;

  constructor(private form: FormBuilder) {
    // Validadores
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Campos inválidos
  hasErrors(controlName: string, errorType: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }

  enviar(): void {
    console.log(this.formularioContacto);
    alert("Formulario enviado!!!");
  }
}
