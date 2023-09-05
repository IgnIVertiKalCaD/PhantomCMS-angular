import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  imports: [
    MatProgressSpinnerModule
  ],
  standalone: true
})
export class OverlayComponent {

}
