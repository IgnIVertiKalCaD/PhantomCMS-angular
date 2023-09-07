import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit{
  constructor(private readonly router: Router) {}

  timer: number = 5

  ngOnInit() {
    setInterval(() => {
      this.timer--
      if (this.timer < 0) this.router.navigate(['/'])
    }, 1000)
  }
}
