import { Project } from './project';
import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogProjectComponent } from '../dialog-project/dialog-project.component';
import {MatIconModule} from '@angular/material/icon';
import { NewlinePipe } from '../Pipes/newline.pipe';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatDialogModule, MatIconModule, NewlinePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  readonly dialog = inject(MatDialog);

  projects: Project[] = [
    new Project('Gatherer Bombers', 
      'PC', 
      '2 Jugadores en Local',
      'Eres un minero dispuesto a encontrar todo los tesoros escondidos en esta mina. Armado con tu pico y un arma, harás frente a tu compañero que tiene exactamente el mismo objetivo. ¡Recoge todos los tesoros o acaba con él antes de lo consiga o perderás la partida!',
      'Proyecto desarrollado como mi primer Trabajo de Fin de Grado y mi primer videojuego desarrollado al completo. Consistió en la definición de un algoritmo de generación procedimental del escenario con el uso de la función Perlin Noise. Los valores con ello obtenidos se usaron junto con un sistema de Tiles de Unity que variaban su aspecto en función de las Tiles que tuviese alrededor.' + 
      '<br>Se trata de un título con visión cenital y de gráficos pixelados para dos jugadores en local ambientado en una mina, cuyo objetivo es conseguir recoger más tesoros que el otro jugador para acabar la partida con más puntos.' + 
      '<br>A través de la función Perlin Noise se distribuían los distintos materiales o elementos por los que estaba compuesto el mapa y con los que el jugador va interactuando a su paso por el mapa: picando materiales para abrirse paso y descubrir tesoros, siendo herido por la lava o ralentizado por el agua.'+
      '<br><br><b>Aspectos clave desarrollados:</b> <br><br>' 
      + '<li>	Movimiento de personajes a través de teclado y su interacción con el medio.'
      + '<li>	Control de las animaciones de los personajes y de elementos a través de sprites y el sistemas de animaciones de Unity.'
      + '<li>	Generación del  terreno a través de la función Perlin Noise en base a unas dimensiones establecidas por los jugadores.'
      + '<li>	Definición de un sistema de Tiles de Unity variables.'
      + '<li>	Sistema de disparo y control de la vida de los personajes.'
      + '<li>	Sistema de recolección de tesoros y puntuación.'
      + '<li>	Control de banda sonora.', 
      '',
      'Unity',
      'C#',
      'VS Code, Photoshop, Procreate',
      '',
      ['assets/ProjectsImages/GathererBombers/Imagen1.png', 
        'assets/ProjectsImages/GathererBombers/Imagen3.png', 
        'assets/ProjectsImages/GathererBombers/Imagen4.png',
        'assets/ProjectsImages/GathererBombers/Imagen2.png'] 
      ),

  ];

  getFormattedText(text:string){
    return text
  }

  openDialog(project: Project) {
    const dialogRef = this.dialog.open(DialogProjectComponent, {
      width: '70%',
      data: {
        data: project
      },
    });
    console.log(project.carouselImages.length);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
