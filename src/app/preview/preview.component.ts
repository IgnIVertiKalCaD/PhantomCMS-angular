import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {IButtonComponent} from "../components/i-button/i-button.component";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    IButtonComponent,
  ]
})
export class PreviewComponent {

}
