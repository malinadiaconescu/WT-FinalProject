import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiServiceUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(`${this.apiServiceUrl}/post/all`);
    }

    public addPost(post: Post): Observable<Post>{
        return this.http.post<Post>(`${this.apiServiceUrl}/post/add`, post);
    }

    public deletePost(postId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServiceUrl}/post/delete/${postId}`);
    }

}
