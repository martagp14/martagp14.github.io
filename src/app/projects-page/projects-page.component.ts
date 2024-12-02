import { Component } from '@angular/core';
import { Project } from './project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  projects: Project[] = [
    new Project('Project 1', 'Description 1', ''),
    new Project('Projecto 2', 'Decripcion algoo', '')
  ];
  
}
