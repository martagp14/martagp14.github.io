import { Project } from './project';
import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogProjectComponent } from '../dialog-project/dialog-project.component';
import {MatIconModule} from '@angular/material/icon';
import { NewlinePipe } from '../Pipes/newline.pipe';
import { CartridgeProjectComponent } from './cartridge-project/cartridge-project.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatDialogModule, MatIconModule,CartridgeProjectComponent],
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
      'assets/ProjectsImages/GathererBombers/MainImage.png',
      ['assets/ProjectsImages/GathererBombers/Imagen1.png', 
        'assets/ProjectsImages/GathererBombers/Imagen3.png', 
        'assets/ProjectsImages/GathererBombers/Imagen2.png',
        'assets/ProjectsImages/GathererBombers/Imagen4.png'] 
    ),

    new Project('Scrum VR',
      'Android (Cardboard)',
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
      'assets/ProjectsImages/ScrumVR/MainImage.png',
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
      'assets/ProjectsImages/SupermarketMission/MainImage.png',
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
    ),
    new Project('Fishing Legends',
      'PC y Web',
      '1 Jugador',
      '¡Prepara tu caña, marinero! ¿Tendrás lo que hace falta para adentrarte en estas aguas y pescar todos los peces que habitan en ellas? Demuéstralo. Pero ten cuidado con el Leviatán. Si pretendes capturar a esta terrible criatura prepárate para afrontar todos los peligros que ello conlleva… Prepara tu sedal, mejora ese bote y emprende la aventura de tu vida.',
      '<b>Aspectos clave desarrollados:</b><br>'+
      '<ul class="custom-list"><li>Control de sonidos, música y otros ajustes.</li>'+
      '<li>Arte 2D.</li>'+
      '<li>Modelado 3D de algunos elementos</li>'+
      '<li>Diseño y desarrollo de menús y UI.</li></ul>',
      'Este juego fue desarrollado como proyecto para una asignatura del máster junto con un grupo de compañeros, en el que la colaboración fue clave para conseguir sacarlo adelante.',
      'https://polyplus.itch.io/fishing',
      'Unity',
      'C#',
      'VS Code, Procreate, Photoshop, Blender',
      'assets/ProjectsImages/FishingLegends/MainImage2.png',
      ['assets/ProjectsImages/FishingLegends/8psLyg.png',
        'assets/ProjectsImages/FishingLegends/IaaLD0.png',
        'assets/ProjectsImages/FishingLegends/mPp3I7.png',
        'assets/ProjectsImages/FishingLegends/MQKHzY.png',
      ]
    ),
    new Project('Good Puppy',
      'PC',
      '1 Jugador',
      '¡Guau! !Guau! Lo que significa… Amo fuera de la casa, ¡es hora de destrozar! Ponte patas a la obra y rompe todo lo que puedas sin que te pille tu amo, que volverá de forma recurrente a la casa para ver que todo sigue en orden. Como te pille fuera de la cama, prepárate para quedarte sin cena.',
      '<b>Aspectos clave desarrollados:</b><br>'+
      '<ul class="custom-list"><li>Control de puntuaciones del jugador. </li>'+
      '<li>Boceto narrativo.</li>'+
      '<li>Diseño y desarrollo de menús y UI.</li></ul>',
      'Desarrollado durante “Games Now! Game Jam – Spring 2024”, en el trascurso de una semana colaborando con compañeros de equipo de diversas nacionalidades. <br>A nivel personal se trata de mi primer contacto con el motor de videojuegos Unreal Engine.',
      'https://anele-i.itch.io/good-puppy',
      'Unreal Engine',
      'Blueprints',
      'Trello, Figma',
      'assets/ProjectsImages/GoodPuppy/MainImage.png',
      ['assets/ProjectsImages/GoodPuppy/LnftfP.png',
        'assets/ProjectsImages/GoodPuppy/nq5CQW.png',
        'assets/ProjectsImages/GoodPuppy/tksoYA.png',
      ]
    ),
    new Project('Space QR',
      'Android (Cardboard)',
      '1 Jugador',
      'Cadete espacial, ¿listo para el entrenamiento? Prepare sus QRs y analice al enemigo, golpéele con ese proyectil que pide a gritos. Pero cuidado no te equivoques de color, serán puntos negativos en tu expediente. ¡Desenfunda tus armas y lánzate al espacio!',
      '<b>Aspectos clave desarrollados:</b><br>'+
      '<ul class="custom-list"><li>Sistema de selección a través de la dirección de la mirada y un Raycaster. </li>'+
      '<li>Utilización del paquete “AR Maker Detector” para gestionar la detección de códigos QR.</li>'+
      '<li>Manejo de puntuaciones y tiempo de partida.</li>'+
      '<li>Uso de la API “Resonance Audio” para reproducir un sonido estéreo en las dianas y ayudar al jugador a localizarlas.</li>'+
      '<li>Diseño y desarrollo de UI.</li></ul>',
      'Minijuego desarrollado durante una asignatura del máster de Realidad Virtual. Fue mi primera experiencia mezclando elementos del mundo real, como son los códigos QR, para interaccionar con un juego. <br>Este título debe jugarse con una montura tipo cardboard, el teléfono móvil y los códigos QRs pertinentes impresos en papel. Con la dirección en la que apunta la cabeza, se establece la dirección en la que se dispara. <br>Cuando el jugador ve un proyectil de un color, debe elevar en frente suya el QR correspondiente a ese color, para disparar el proyectil correcto. Los QRs son detectados gracias a la ayuda de la cámara trasera del teléfono móvil.',
      '',
      'Unity',
      'C#',
      'VS Code, Photoshop',
      'assets/ProjectsImages/SpaceShooting/MainImage.png',
      ['assets/ProjectsImages/SpaceShooting/Imagen5.png',
        'assets/ProjectsImages/SpaceShooting/Imagen1.png',
        'assets/ProjectsImages/SpaceShooting/Imagen2.png',
        'assets/ProjectsImages/SpaceShooting/Imagen3.png',
        'assets/ProjectsImages/SpaceShooting/Imagen4.png'
      ]
    )
  ];

  projectsEng: Project[] = [
    new Project('Gatherer Bombers',  
      'PC',  
      '2 Local Players',  
      'You are a miner determined to find all the hidden treasures in this mine. Armed with your pickaxe and a weapon, you will face off against your opponent, who has the exact same goal. Collect all the treasures or eliminate them before they do, or you will lose the game!',  
      '<b>Key Features Developed:</b><br>'  
      + '<ul class="custom-list"><li>Designed an algorithm for terrain generation using the Perlin Noise function, ensuring continuity and coherence among the map elements. Players determine the map dimensions before starting the game.</li>'  
      + '<li>Implemented Unity’s variable tile system, which changes appearance based on its surroundings.</li>'  
      + '<li>Character control via keyboard: movement, mining, and shooting.</li>'  
      + '<li>Character interaction with the environment: water slows down movement, while lava reduces health points.</li>'  
      + '<li>Managed character animations and environmental elements using sprites and Unity’s animation system.</li>'  
      + '<li>Developed a player health point system.</li>'  
      + '<li>Created a treasure collection and scoring system.</li>'  
      + '<li>Implemented background music control.</li> </ul>',  
      'Project developed as my first Final Degree Project and my first fully completed video game. It is a top-down, pixel-art style game set in a mine. <br>Using the Perlin Noise function, different materials and elements were distributed across the map, which players interact with as they progress: mining materials to clear paths and uncover treasures, taking damage from lava or their opponent, and being slowed down by water.',  
      '',  
      'Unity',  
      'C#',  
      'VS Code, Photoshop, Procreate, Audacity',  
      'assets/ProjectsImages/GathererBombers/MainImage.png',
      ['assets/ProjectsImages/GathererBombers/Imagen1.png', 
        'assets/ProjectsImages/GathererBombers/Imagen3.png', 
        'assets/ProjectsImages/GathererBombers/Imagen2.png',
        'assets/ProjectsImages/GathererBombers/Imagen4.png'] 
    ),

    new Project('Scrum VR',
      'Android (Cardboard)',
      '1 Player',
      'Step into the role of a university student starting their first job. Here, you will learn the fundamentals of the agile Scrum methodology through mini-games and interactions with your team.',
      '<b>Key Features Developed:</b><br>'+
      '<ul class="custom-list"><li>Creation and texturing of the environment through custom modeling and importing/adapting external assets.</li>'+
      '<li>Control of character animation flow and synchronization with their respective dialogues.</li>'+
      '<li>Use of IK (Inverse Kinematics) to modify predefined character animations for proper interaction with the environment.</li>'+
      '<li>User interaction system with game elements based on head positioning direction.</li>'+
      '<li>Implementation of Google Cardboard XR Plugin for Unity and Unity XR Plug-in Management for integrating VR components and stereoscopic rendering.</li>'+
      '<li>Various mini-game mechanics and interactive dialogues.</li></ul>',
      'This project was developed as my second Final Degree Project. It is an educational Virtual Reality tool designed to teach the agile Scrum methodology. Throughout the experience, players are introduced to various concepts of Scrum and then engage in interactive mini-games to test their understanding. <br>This tool has been used in classes at the Universidad Politécnica de Madrid (ETSISI).',
      '',
      'Unity',
      'C#', 
      'Blender, Photoshop, Audacity',
      'assets/ProjectsImages/ScrumVR/MainImage.png',
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
      '1 Player',
      'Is it now your turn to do the shopping alone? A simple mission for a spy like you! Prove to your parents that you can bring back all the items they asked for in perfect condition.',
      '<b>Key Features Developed:</b><br>'+
      '<ul class="custom-list"><li>Hand-drawn creation of all in-game sprites.</li>'+
      '<li>Player score management.</li>'+
      '<li>Maintaining game state consistency throughout the entire session.</li>'+
      '<li>Collection of player scores and basic data in a “MySQL” database.</li>'+
      '<li>Interaction with the game via mouse and keyboard.</li></ul>',
      'A fully developed game as my Final Master\'s Project, aimed at developing computational thinking in primary school children while they play. It focuses on areas such as problem decomposition, feature analysis, pattern recognition, and algorithmic thinking. \nPlayer scores and some other basic data, like age and gender, are collected to conduct a study on the educational effectiveness of the game.',
      '',
      'Unity',
      'C#',
      'VS Code, Procreate, Photoshop, Blender, phpMyAdmin',
      'assets/ProjectsImages/SupermarketMission/MainImage.png',
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
    ),
    new Project('Fishing Legends',
      'PC & Web',
      '1 Player',
      'Grab your fishing rod, sailor! Do you have what it takes to venture into these waters and catch all the fish that live in them? Prove it. But beware of the Leviathan. If you plan to capture this fearsome creature, be ready to face all the dangers that come with it… Prepare your line, upgrade your boat, and embark on the adventure of a lifetime.',
      '<b>Key Features Developed:</b><br>'+
      '<ul class="custom-list"><li>Control of sound, music, and other settings.</li>'+
      '<li>2D artwork.</li>'+
      '<li>3D modeling of certain elements.</li>'+
      '<li>Design and development of menus and UI.</li></ul>',
      'This game was developed as a project for a Master’s course in collaboration with a team of classmates, where teamwork was crucial to its completion.',
      'https://polyplus.itch.io/fishing',
      'Unity',
      'C#',
      'VS Code, Procreate, Photoshop, Blender',
      'assets/ProjectsImages/FishingLegends/MainImage2.png',
      ['assets/ProjectsImages/FishingLegends/8psLyg.png',
        'assets/ProjectsImages/FishingLegends/IaaLD0.png',
        'assets/ProjectsImages/FishingLegends/mPp3I7.png',
        'assets/ProjectsImages/FishingLegends/MQKHzY.png',
      ]
    ),
    new Project('Good Puppy',
      'PC',
      '1 Player',
      'Woof! Woof! Which means… Owner out of the house, time to wreck things! Get to work and destroy as much as possible without getting caught. Your owner will come back periodically to check if everything is in order. If they catch you out of bed, prepare to lose your dinner.',
      '<b>Key Features Developed:</b><br>'+
      '<ul class="custom-list"><li>Player score management.</li>'+
      '<li>Narrative sketch.</li>'+
      '<li>Design and development of menus and UI.</li></ul>',
      'Developed during the “Games Now! Game Jam – Spring 2024” over the course of a week, collaborating with teammates from various nationalities. <br>On a personal level, this was my first experience working with Unreal Engine.',
      'https://anele-i.itch.io/good-puppy',
      'Unreal Engine',
      'Blueprints',
      'Trello, Figma',
      'assets/ProjectsImages/GoodPuppy/MainImage.png',
      ['assets/ProjectsImages/GoodPuppy/LnftfP.png',
        'assets/ProjectsImages/GoodPuppy/nq5CQW.png',
        'assets/ProjectsImages/GoodPuppy/tksoYA.png',
      ]
    ),
    new Project('Space QR',
      'Android (Cardboard)',
      '1 Player',
      'Space Cadet, are you ready for training? Prepare your QRs, analyze the enemy and make sure to hit them with the projectile they’re asking for. But be careful—if you use the wrong color, you’ll receive negative points on your record. Prepare your weapons and launch into space!',
      '<b>Key Features Developed:</b><br>'+
      '<ul class="custom-list"><li>Selection system using head-gaze direction and a raycaster.</li>'+
      '<li>Use of the “AR Marker Detector” package for QR code detection.</li>'+
      '<li>Score and game time management.</li>'+
      '<li>Implementation of the “Resonance Audio” API to produce stereo sound from targets, helping players locate them.</li>'+
      '<li>Design and development of UI.</li></ul>',
      'A mini-game developed during a Master’s course on Virtual Reality. This was my first experience integrating real-world elements, such as QR codes, into a game. <br>This game requires a cardboard-style headset, a mobile phone, and printed QR codes. By moving their head, players determine the direction in which they shoot. <br>When players see a projectile of a certain color, they must hold up the corresponding QR code in front of them to fire the correct projectile. The QRs are detected using the mobile phone’s rear camera.',
      '',
      'Unity',
      'C#',
      'VS Code, Photoshop',
      'assets/ProjectsImages/SpaceShooting/MainImage.png',
      ['assets/ProjectsImages/SpaceShooting/Imagen5.png',
        'assets/ProjectsImages/SpaceShooting/Imagen1.png',
        'assets/ProjectsImages/SpaceShooting/Imagen2.png',
        'assets/ProjectsImages/SpaceShooting/Imagen3.png',
        'assets/ProjectsImages/SpaceShooting/Imagen4.png'
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
