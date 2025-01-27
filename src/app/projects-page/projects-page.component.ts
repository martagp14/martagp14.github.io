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
      '<b>Aspectos clave desarrollados:</b><br>' 
      + '<ul class="custom-list"><li>	Definición de un algoritmo para la generación del terreno de juego a través de la función Perlin Noise, buscando continuidad y coherencia entre los elementos que lo conforman. Los jugadores determinan las dimensiones del mapa antes de comenzar la partida.</li>'
      + '<li>	Utilización de un sistema de Tiles de Unity variables que cambian su apariencia en función de su entorno.</li>'
      + '<li>	Control de los personajes a través de teclado: movimiento, picar piedra, disparar.</li>'
      + '<li>	Interacción del personaje con el medio: agua ralentiza el desplazamiento, la lava resta puntos de salud.</li>'
      + '<li>	Control de las animaciones de los personajes y de los elementos de escenario a través de sprites y el sistema de animaciones de Unity.</li>'
      + '<li>	Sistema de puntos de salud de los jugadores.</li>'
      + '<li>	Sistema de recolección de tesoros y puntuación.</li>'
      + '<li> Control de banda sonora. </li> </ul>',
      'Proyecto desarrollado como mi primer Trabajo de Fin de Grado y mi primer videojuego desarrollado al completo. Se trata de un título con visión cenital y de gráficos pixelados ambientado en una mina. <br>A través de la función Perlin Noise se distribuían los distintos materiales o elementos por los que estaba compuesto el mapa y con los que el jugador va interactuando a su paso: picando materiales para abrirse paso y descubriendo tesoros, siendo herido por la lava o por el otro jugador y siendo ralentizado por el agua.',
      '',
      'Unity',
      'C#',
      'VS Code, Photoshop, Procreate, Audacity',
      'assets/ProjectsImages/GathererBombers/Imagen1.png',
      ['assets/ProjectsImages/GathererBombers/Imagen1.png', 
        'assets/ProjectsImages/GathererBombers/Imagen3.png', 
        'assets/ProjectsImages/GathererBombers/Imagen4.png',
        'assets/ProjectsImages/GathererBombers/Imagen2.png'] 
    ),

    new Project('Scrum VR',
      'Smartphones (Android)',
      '1 Jugador',
      'Toma el papel de un estudiante de universidad recién llegado a su nuevo puesto de trabajo. En él te enseñarán los fundamentos de la metodología ágil de trabajo Scrum a través de minijuegos e interacciones con el resto del equipo.',
      '<b>Aspectos clave desarrollados:</b><br>'+ 
      '<ul class="custom-list"><li>Creación y texturizado del escenario a través de modelado propio e importación y adecuación de assets externos.</li>'+
      '<li>Control del flujo de animaciones de los personajes y sincronización con sus respectivos diálogos.</li>'+
      '<li>Uso de IK (Inverse Kinematic) para la modificación de animaciones predefinidas de personajes y su correcta interacción con el entorno.</li>'+
      '<li>Sistema de interacción del usuario con los elementos del juego a través de la dirección de posicionamiento de la cabeza.</li>'+
      '<li>Utilización del Google Cardboard XR Plugin for Unity y XR Plug-in Management de Unity para la utilización de componentes básicos para RV en Unity y la renderización estereoscópica final.</li>'+
      '<li>Distintas mecánicas de minijuegos e interacciones en diálogos.</li>',
      'Este proyecto fue desarrollado como segundo Trabajo de Fin de Grado. Consiste en una herramienta educativa de Realidad Virtual para la enseñanza de la metodología ágil de trabajo Scrum. Durante el transcurso de la experiencia, se le van explicando al jugador distintos conceptos de esta metodología, y se le presentan minijuegos de interacción para ver si los ha comprendido. <br>Esta herramienta ha sido utilizada en clases en la Universidad Politécnica de Madrid (ETSISI).',
      '',
      'Unity',
      'C#', 
      'Blender, Photoshop, Audacity',
      'assets/ProjectsImages/ScrumVR/LogoScrumVR.png',
      ['assets/ProjectsImages/ScrumVR/LogoScrumVR.png',
        'assets/ProjectsImages/ScrumVR/10 SM explicando en el tablon 2.PNG',
        'assets/ProjectsImages/ScrumVR/2021-05-28 (5).png',
        'assets/ProjectsImages/ScrumVR/2021-06-15 (1) r.png',
        'assets/ProjectsImages/ScrumVR/2021-06-19 (8) r.png',
        'assets/ProjectsImages/ScrumVR/Imagen1.png',
        'assets/ProjectsImages/ScrumVR/Screenshot_20210625-120330.jpg',
      ]
    ),
    new Project('Supermarket Mission',
      'PC',
      '1 Jugador',
      '¿Te toca hacer la compra a ti solo? ¡Una misión sencilla para un espía como tú! Demuestra a tus padres que eres capaz de traer todos los elementos que te piden del supermercado en perfecto estado.',
      '<b>Aspectos clave desarrollados:</b><br>'+
      '<ul class="custom-list"><li>Creación propia de todos los sprites utilizados.</li>'+
      '<li>Manejo de puntuaciones del jugador.</li>'+
      '<li>Cohesión del estado de los elementos del juego durante toda la partida.</li>'+
      '<li>Recopilación de datos de puntuaciones y jugador en una base de datos “MySQL”.</li>'+
      '<li>Interacción con el juego a través de ratón y teclado.</li></ul>',
      'Juego desarrollado al completo como Trabajo de Fin de Máster, cuyo objetivo es trabajar el desarrollo del pensamiento computacional en niños de primaria mientras juegan. Trabaja áreas como la descomposición de problemas, el análisis de características, identificación de patrones y pensamiento algorítmico. \nLas puntuaciones de los jugadores y datos básicos como edad y género son recogidos para poder realizar un estudio sobre la efectividad educativa del videojuego.',
      '',
      'Unity',
      'C#',
      'VS Code, Procreate, Photoshop, Blender, phpMyAdmin',
      'assets/ProjectsImages/SupermarketMission/2024-07-03 (2).png',
      ['assets/ProjectsImages/SupermarketMission/2024-07-03 (2).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (5).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (10).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (16).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (21).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (29).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (33).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (45).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (51).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (52).png',
        'assets/ProjectsImages/SupermarketMission/2024-07-03 (65).png',
      ]
    )
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
