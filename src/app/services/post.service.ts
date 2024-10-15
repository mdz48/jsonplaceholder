import { IPost } from './../models/ipost';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(readonly httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    return this.httpClient.get<IPost[]>(url)
  }

  
}
