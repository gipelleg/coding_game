import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http: HttpClient) { }

  getAllPost() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}