import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';
import { environment } from '../../environments/environment';

const POST_API = '/posts'

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http: HttpClient) { }

  getAllPost() {
    return this.http.get<Post[]>(`${environment.baseApi}/${POST_API}`);
  }
}
