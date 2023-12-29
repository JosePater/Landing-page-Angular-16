import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {
  @Input() tipoDni: string = 'DNI';
  formularioDocumento: FormGroup;
  variableNueva: string = 'NÚMERO ID';

  constructor(private form: FormBuilder) {
    this.formularioDocumento = this.form.group({
      dni: ['', [Validators.required, Validators.minLength(3)]]
    })

  }
  // Cuando algo cambia dentro del componente
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes?.['tipoDni'].currentValue);
    // Si no hubo cambios se deja el nombre de inicio de variableNueva
    this.variableNueva = !changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue: this.variableNueva;

  }

    // Campos inválidos
    hasErrors(controlName: string, errorType: string) {
      return (
        this.formularioDocumento.get(controlName)?.hasError(errorType) &&
        this.formularioDocumento.get(controlName)?.touched
      );
    }

}
