import { Component, ElementRef, Input, OnInit,ViewChild } from '@angular/core';
import { Post } from '../models/post';
import { BlogPostService } from '../services/blog-post/blog-post.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  
  @ViewChild('title') title: any;
  @ViewChild ('message') message: any;
  emptyFieldsMessage: any;
  messageOfResponse: any;

  //ElementRef causes typescript problem need to make research

  constructor(private blogPostService:BlogPostService) { 
  }


  onCreateBlogPost(event:any){
    event.preventDefault();
    const title = this.title.nativeElement.value;
    const message = this.message.nativeElement.value;
    if(title && message){
      this.emptyFieldsMessage = '';
      this.blogPostService.createPost(title,message).subscribe(data => {
        if(data.hasOwnProperty('userId')){
        this.messageOfResponse = 'your post was successfully created';
      } else {
        this.messageOfResponse = 'please try again';
      }
    })
   } else {
    this.emptyFieldsMessage = 'please enter your title and blog post';
    this.messageOfResponse = ''
  }
  }


}
