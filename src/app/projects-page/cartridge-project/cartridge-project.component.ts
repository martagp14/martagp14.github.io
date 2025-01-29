import { Component, input, Input, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-cartridge-project',
  templateUrl: './cartridge-project.component.html',
  styleUrls: ['./cartridge-project.component.css'],
  standalone: true
})
export class CartridgeProjectComponent implements OnInit {

  @Input() gameImagePath!: string;
  @Input() gameTitle: string = '';

  constructor() { 
  }

  ngOnInit() {

  }

}
