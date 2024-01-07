import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ServerDto } from "@/app/navigation/servers/dto/server.dto";
import { GetServersDto } from "./dto/get-servers.dto";

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor(private http: HttpClient) { }



  getServers(getServersDto: GetServersDto) {
    return this.http.get<ServerDto[]>('servers', {
      params: {
        ...getServersDto
      }
    });
  }
}
