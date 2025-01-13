import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  standalone: true
})
export class CharacterComponent {
  // posX = window.innerWidth / 2;
  // posY = window.innerHeight / 2;
  // moveDistance = 10;
  // isWalking = false;

  // @HostListener('window:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   const character = document.getElementById('character');
  //   if (!character) return;

  //   if (!this.isWalking) {
  //     character.classList.add('walk');
  //     this.isWalking = true;
  //   }

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

  //   character.style.left = `${this.posX}px`;
  //   character.style.top = `${this.posY}px`;
  // }

  // @HostListener('window:keyup', ['$event'])
  // onKeyUp(event: KeyboardEvent) {
  //   const character = document.getElementById('character');
  //   if (!character) return;

  //   character.classList.remove('walk');
  //   this.isWalking = false;
  // }

  // const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  // const ctx = this.canvas.getContext('2d');

  // // Cargar la imagen de la hoja de sprites
  // const spriteSheet = new Image();
  // this.spriteSheet.src = 'ruta/a/tu/hoja_de_sprites.png';
  // this.spriteSheet.onload = () => {
  //     // Una vez cargada la imagen, iniciamos la animación
  //     animate();
  // };

  // // Dimensiones de cada frame en la hoja de sprites
  // const frameWidth = 32;
  // const frameHeight = 32;

  // // Posición inicial del personaje en el canvas
  // let x = 100;
  // let y = 100;

  // // Velocidad de movimiento
  // const speed = 5;

  // // Frame actual de la animación
  // let currentFrame = 0;
  // let frameCount = 8; // Número total de frames en la animación

  // // Dirección de movimiento
  // let direction = 'right'; // Inicialmente mirando hacia la derecha

  // // Función para dibujar un frame específico
  // function drawFrame(frameX: number, frameY: number) {
  //     ctx.drawImage(spriteSheet,
  //         frameX * frameWidth, frameY * frameHeight,
  //         frameWidth, frameHeight,
  //         x, y,
  //         frameWidth, frameHeight);
  // }

  // // Función de animación
  // function animate() {
  //     // Limpiar el canvas
  //     ctx.clearRect(0, 0, this.canvas.width, canvas.height);

  //     // Dibujar el frame actual
  //     drawFrame(currentFrame, 0); // Suponiendo que los frames están en una sola fila

  //     // Actualizar el frame
  //     currentFrame = (currentFrame + 1) % frameCount;

  //     // Solicitar el siguiente frame
  //     requestAnimationFrame(animate);
  // }

  // // Manejador de eventos de teclado
  // document.addEventListener('keydown', (event) => {
  //     switch (event.key) {
  //         case 'ArrowLeft':
  //             x -= speed;
  //             direction = 'left';
  //             break;
  //         case 'ArrowRight':
  //             x += speed;
  //             direction = 'right';
  //             break;
  //         case 'ArrowUp':
  //             y -= speed;
  //             break;
  //         case 'ArrowDown':
  //             y += speed;
  //             break;
  //     }
  // });
}
