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

  imagesProject:any;
  currectIndex:number = 0;

  // openModal(image: any) {
  openModal(index: any, carousel:any) {
    const modal = document.getElementById("imageModal") as HTMLElement;
    const modalImg = document.getElementById("modalImage") as HTMLImageElement;
    this.imagesProject = carousel;
    modal.style.display = "block";
    this.currectIndex=index;
    console.log(carousel[index]);
    modalImg.src = carousel[index];
    
  }

  closeModal() {
    var modal = document.getElementById("imageModal") ;
    if(modal) modal.style.display = "none";
  } 

  nextImg(){
    const modal = document.getElementById("imageModal") as HTMLElement;
    const modalImg = document.getElementById("modalImage") as HTMLImageElement;
    this.currectIndex++;
    this.currectIndex=this.currectIndex%this.imagesProject.length;
    console.log(this.currectIndex);

    modalImg.src = this.imagesProject[this.currectIndex]; // Set the modal image source to the clicked image    
   console.log(modalImg.src);
  }

  prevImg(){
    const modal = document.getElementById("imageModal") as HTMLElement;
    const modalImg = document.getElementById("modalImage") as HTMLImageElement;
    this.currectIndex--;
    if(this.currectIndex<0)
      this.currectIndex = this.imagesProject.length-1;
    console.log(this.currectIndex);
    modalImg.src = this.imagesProject[this.currectIndex]; // Set the modal image source to the clicked image    
    console.log(modalImg.src);
   
  }
}
