import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
import {newsSortBy} from "@/app/navigation/news/types/newsSortBy";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(sortBy: newsSortBy) {
    return this.http.get<NewsDto[]>(`/news?sortBy=${sortBy}`);
  }

  getNewsById(id: number) {
    return this.http.get<NewsDto>(`/news/${id}`)
  }
}
