import { Project } from './project';
import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogProjectComponent } from '../dialog-project/dialog-project.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatDialogModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  readonly dialog = inject(MatDialog);

  projects: Project[] = [
    new Project('Project 1', 'Description 1', ''),
    new Project('Projecto 2', "Decripcion algoo sjkdfhajkshasdhgfaoshjas jfjhafh", ''),
    new Project('Projecto 3', 'Decripcion algoo', ''),
    new Project('Projecto 4', 'Decripcion algoo', ''),
    new Project('Projecto 5', 'Decripcion algoo', '')

  ];

  openDialog(project: Project) {
    const dialogRef = this.dialog.open(DialogProjectComponent, {
      width: '70%',
      data: {
        data: project
      },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
