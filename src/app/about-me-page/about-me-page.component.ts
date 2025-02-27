import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [
    RouterLink],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css'
})
export class AboutMePageComponent {

  downloadCV() {
    const link = document.createElement("a");
    link.href = "assets/CV/CV Marta García Pérez.pdf"; // Cambia esta ruta al archivo PDF
    link.download = "CV Marta García Pérez.pdf"; // Nombre del archivo descargado
    link.click();
  }

}
