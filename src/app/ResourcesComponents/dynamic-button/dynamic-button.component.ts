import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-button.component.html',
  styleUrl: './dynamic-button.component.css'
})
export class DynamicButtonComponent {
  @Input() title:string ='';
  @Input() icon:string ='';

  //Para pasarselo --> <appblabla [title]="''">
}
