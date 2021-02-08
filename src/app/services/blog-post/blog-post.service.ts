import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post';
@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  response: any;
  
  constructor(private http:HttpClient ) { }


  createPost(title: string, message: string){

   let randomNumber: number = Math.floor(Math.random() * 1000);    

   const BLOG_POST_API = "https://jsonplaceholder.typicode.com/posts";
   const body = JSON.stringify({
      title:title,
      body: message,
      userId: randomNumber
    })
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }

    return this.http.post(BLOG_POST_API,body,{headers});

  }

}
