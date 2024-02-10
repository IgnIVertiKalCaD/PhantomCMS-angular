import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ServersDto } from "@/app/navigation/servers/dto/servers.dto";
import { GetServersDto } from "./dto/get-servers.dto";

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor(private http: HttpClient) { }


  getServerById(uniqueId: string) {
    return this.http.get<ServersDto>(`/servers/${uniqueId}`)
  }

  getServers(getServersDto: GetServersDto) {
    return this.http.get<ServersDto[]>('servers', {
      params: {
        ...getServersDto
      }
    });
  }
}
