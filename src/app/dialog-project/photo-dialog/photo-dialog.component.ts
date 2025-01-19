import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { NgFor, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DynamicButtonComponent } from "../../ResourcesComponents/dynamic-button/dynamic-button.component";

@Component({
  selector: 'app-photo-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogClose, MatButtonModule, CommonModule, DynamicButtonComponent],
  templateUrl: './photo-dialog.component.html',
  styleUrl: './photo-dialog.component.css'
})
export class PhotoDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  imagesProject:any = this.data.carousel;
  currectIndex:number = this.data.index;

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
    const modalImg = document.getElementById("modalImage") as HTMLImageElement;
    this.currectIndex++;
    this.currectIndex=this.currectIndex%this.imagesProject.length;
    console.log(this.currectIndex);

    modalImg.src = this.imagesProject[this.currectIndex]; // Set the modal image source to the clicked image    
   console.log(modalImg.src);
  }

  prevImg(){
    const modalImg = document.getElementById("modalImage") as HTMLImageElement;
    this.currectIndex--;
    if(this.currectIndex<0)
      this.currectIndex = this.imagesProject.length-1;
    console.log(this.currectIndex);
    modalImg.src = this.imagesProject[this.currectIndex]; // Set the modal image source to the clicked image    
    console.log(modalImg.src);
   
  }
}
