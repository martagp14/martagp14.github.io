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
import { NewlinePipe } from "../Pipes/newline.pipe";


@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [MatDialogContent, MatDialogClose, MatButtonModule, NewlinePipe],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogProjectComponent{
  data = inject(MAT_DIALOG_DATA);
}
