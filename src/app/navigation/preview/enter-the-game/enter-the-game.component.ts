import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {RouterLink} from "@angular/router";
import {ButtonComponent} from "@/app/components/button/button.component";
import {SafePipe} from "@/pipes/safe.pipe";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-enter-the-game',
  templateUrl: './enter-the-game.component.html',
  styleUrls: ['./enter-the-game.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent,
    SafePipe,
    NgOptimizedImage
  ]
})
export class EnterTheGameComponent {

  protected readonly phantomIcons = phantomIcons;
}
