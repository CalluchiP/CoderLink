import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-proyecto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent {
  proyectoForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    this.proyectoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      presentacion: ['', Validators.required],
      estado: ['in-progress', Validators.required],
      revision: ['', Validators.required],
      categoria: ['', Validators.required],
      calificacion: ['1', Validators.required],
      tarifa: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]]
    });
  }

  goToHome() {
    this.router.navigate(['/profile-customer']);
  }

  onSubmit() {
    if (this.proyectoForm.valid) {
      const tarifa = this.proyectoForm.value.tarifa;
      if (tarifa < 0) {
        alert('Monto inválido. Debe ser un número positivo.');
        return;
      }

      console.log('Proyecto creado:', this.proyectoForm.value);
      alert('Proyecto creado con éxito');
      this.router.navigate(['/profile-customer']);
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }
}
