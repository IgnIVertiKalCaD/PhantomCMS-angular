import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatChipsModule} from "@angular/material/chips";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {GetServers, ServersState} from "@/app/navigation/servers/store/servers.state";
import {ServerDto} from "@/app/navigation/servers/dto/server.dto";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatProgressBarModule, MatChipsModule, NgForOf, NgClass, AsyncPipe],
})
export class ServersComponent implements OnInit{
  constructor(private readonly sanitizer: DomSanitizer, private store: Store) {}

  @Select(ServersState.getServers)
  readonly servers$: Observable<ServerDto[]>;

  icon_for_show_full_version_server: SafeHtml;

  ngOnInit() {
    this.store.dispatch(new GetServers());
    this.icon_for_show_full_version_server = this.sanitizer.bypassSecurityTrustHtml("<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.3\"><path d=\"M8 2.875C8 2.37772 8.21071 1.90081 8.58579 1.54917C8.96086 1.19754 9.46957 1 10 1C10.5304 1 11.0391 1.19754 11.4142 1.54917C11.7893 1.90081 12 2.37772 12 2.875C12 3.37228 11.7893 3.84919 11.4142 4.20083C11.0391 4.55246 10.5304 4.75 10 4.75C9.46957 4.75 8.96086 4.55246 8.58579 4.20083C8.21071 3.84919 8 3.37228 8 2.875ZM6 8.5C6 7.80859 6.59583 7.25 7.33333 7.25H10C10.7375 7.25 11.3333 7.80859 11.3333 8.5V17.25H12.6667C13.4042 17.25 14 17.8086 14 18.5C14 19.1914 13.4042 19.75 12.6667 19.75H7.33333C6.59583 19.75 6 19.1914 6 18.5C6 17.8086 6.59583 17.25 7.33333 17.25H8.66667V9.75H7.33333C6.59583 9.75 6 9.19141 6 8.5Z\" fill=\"white\"/></g></svg>");
  }
}
