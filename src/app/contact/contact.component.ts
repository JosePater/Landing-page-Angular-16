import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy{
  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';
  mostrarDni: boolean = false; // Para que cuando se seleccione el tipo de DNI se muestre el campo (ID)

  constructor(private form: FormBuilder) {
    // Validadores
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    // Set valor a tipo de documento (tipoDni)
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.tipoDni = value;
      this.mostrarDni = value != ''; // Campo ID
    })
  }

  ngOnDestroy(): void {
    console.log("Se ha destruido el componente Contact!");
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
    this.formularioContacto.reset();
    this.mostrarDni = false;
  }
}
