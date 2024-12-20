import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Proyecto {
  id: number;
  nombre: string;
  estado: 'Activo' | 'Terminado';
  fechaInicio: Date;
  fechaActualizacion: Date;
  progreso: number;
}
@Component({
  selector: 'app-historial-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-proyectos.component.html',
  styleUrl: './historial-proyectos.component.scss'
})
export class HistorialProyectosComponent {
  // Lista de proyectos (se puede cargar de un servicio en una app real)
  proyectos: Proyecto[] = [
    { id: 1, nombre: 'Aplicacion moviles', estado: 'Activo', fechaInicio: new Date('2024-11-04'), fechaActualizacion: new Date('2024-12-04'), progreso: 27 },
    { id: 2, nombre: 'Sistema Web para una clinica', estado: 'Activo', fechaInicio: new Date('2024-11-04'), fechaActualizacion: new Date('2024-11-04'), progreso: 0 },
    { id: 3, nombre: 'Sistema web de gimnasio', estado: 'Terminado', fechaInicio: new Date('2024-11-04'), fechaActualizacion: new Date('2024-11-04'), progreso: 100 },
  ];

  constructor(private router: Router) {}

  // Método para ver detalles del proyecto
  verProyecto(id: number) {
    // Aquí podrías navegar a una página de detalles o abrir un modal con la información del proyecto.
    this.router.navigate(['/view-project']);
  }

  // Método para eliminar un proyecto
  eliminarProyecto(id: number) {
    this.proyectos = this.proyectos.filter(proyecto => proyecto.id !== id);
    alert(`El proyecto con ID ${id} ha sido eliminado.`);
  }
  navigateBack() {
    // Cambia '/freelancer' por la ruta que deseas
    this.router.navigate(['/profile-customer']);
  }
}
