import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ServerDto} from "@/app/navigation/servers/dto/server.dto";


@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor (private http: HttpClient) {}

  getServers() {
    const params = new HttpParams({
      fromObject: { sortBy : 'name:DESC', page: 1 }
    });

    return this.http.get<ServerDto[]>('https://api.phantomcms.org/servers', {params});
  }
}
