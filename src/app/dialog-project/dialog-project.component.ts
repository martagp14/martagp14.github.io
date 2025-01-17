import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Project } from '../projects-page/project';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [MatDialogContent, MatDialogClose, MatButtonModule, NgFor, CommonModule],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogProjectComponent{
  data = inject(MAT_DIALOG_DATA);

  openModal(image: any) {
    const modal = document.getElementById("imageModal") as HTMLElement;
    const modalImg = document.getElementById("modalImage") as HTMLImageElement;
  
    modal.style.display = "block";
    modalImg.src = image; // Set the modal image source to the clicked image    
  }

  closeModal() {
    var modal = document.getElementById("imageModal") ;
    if(modal) modal.style.display = "none";
  } 
}
