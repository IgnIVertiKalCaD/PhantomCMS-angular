import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {GetServersDto} from "./dto/get-servers.dto";

@Injectable()
export class AppService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}
  apiURL: string = 'https://api.phantomcms.org/servers'
  public getdata() {

    const params = new HttpParams({
      fromObject: { sortBy : 'name:DESC', page: 1 }
    });

    return this.httpClient.get<GetServersDto[]>(this.apiURL, {params})
  }
}
