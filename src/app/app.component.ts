import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {GetServersDto} from "./dto/get-servers.dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly appService: AppService) {}

  title = 'PhantomCMS';

  servers: GetServersDto[] = [];
  ngOnInit(): void {
    this.appService.getdata().subscribe((res) => {this.servers = res})
    console.log(this.servers)
  }
}
