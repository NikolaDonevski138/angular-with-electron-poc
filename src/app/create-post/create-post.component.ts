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

  //typescript problem with different type of any.. 


  constructor(private blogPostService: BlogPostService) { 
  }


  createDesktopNotification(textToShow:string){
    const options = {
      body: `${textToShow} !`
    };

    new Notification('Information About your blog post: ', options);

  }



  onCreateBlogPost(event:any){
    event.preventDefault();
    const title = this.title.nativeElement.value;
    const message = this.message.nativeElement.value;
    if(title && message){
      this.emptyFieldsMessage = '';
      this.blogPostService.createPost(title,message).subscribe(data => {
        if(data.hasOwnProperty('userId')){
        this.createDesktopNotification('your post was successfully created')
      } else {
        this.createDesktopNotification('your post was not successfull please try again')
      }
    })
   } else {
    this.emptyFieldsMessage = 'please enter your title and blog post';
  }
  }


}
