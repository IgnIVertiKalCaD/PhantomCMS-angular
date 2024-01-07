import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<NewsDto[]>('/news');
  }

  getNewsById(id: number) {
    return this.http.get<NewsDto>(`/news/${id}`)
  }
}
