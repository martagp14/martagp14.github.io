import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterComponent } from '../character/character.component';
import {MatIconModule} from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { AppComponent, Language } from '../app.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CharacterComponent, MatIconModule, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent{ //implements AfterViewInit{

  currentLanguage = AppComponent.currentLanguage;
  Language = Language;

  compareLanguage(language: Language){
    console.log(this.currentLanguage)

    console.log(this.currentLanguage==language)
    return this.currentLanguage==language;
  }

  // character = document.getElementById('character');

  // ngAfterViewInit() {
  //   this.character = document.getElementById('character');
  //   if (this.character) {
  //     this.character.style.position = 'absolute'; // Ensure character is positioned absolutely
  //     this.character.style.left = this.posX + 'px';
  //     this.character.style.top = this.posY + 'px';
  //   }
  // }
  // posX = window.innerWidth / 2;  // Starting X position (center)
  // posY = window.innerHeight / 2;  // Starting Y position (center)
  // moveDistance = 20;  // How much the character moves with each keypress

  // @HostListener('window:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   debugger
  //   switch (event.key) {
  //     case 'ArrowUp':
  //     case 'w':
  //       this.posY -= this.moveDistance;
  //       break;
  //     case 'ArrowDown':
  //     case 's':
  //       this.posY += this.moveDistance;
  //       break;
  //     case 'ArrowLeft':
  //     case 'a':
  //       this.posX -= this.moveDistance;
  //       break;
  //     case 'ArrowRight':
  //     case 'd':
  //       this.posX += this.moveDistance;
  //       break;
  //   }

  //   // Update character's position on the screen
  //   if(this.character) this.character.style.left = this.posX + 'px';
  //   if(this.character) this.character.style.top = this.posY + 'px';
  // }
}
