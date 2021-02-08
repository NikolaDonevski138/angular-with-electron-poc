import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderServiceService } from '../../services/json-placeholder-service/json-placeholder-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  photos = [];
  pageNumber = 1;
  constructor(private jsonPlaceholderService:JsonPlaceholderServiceService) { }

  getRequestHelper(pageNum: number){
    this.jsonPlaceholderService.sendGetRequest(pageNum).subscribe((data: any)=> {
      this.photos = data
    })
  }

  ngOnInit(): void {
    this.getRequestHelper(this.pageNumber);
  }

  nextPage(){
    this.pageNumber++
    this.getRequestHelper(this.pageNumber);
  }

  previousPage(){
    if(this.pageNumber === 1) {
      return;
    }
    this.pageNumber--
    this.getRequestHelper(this.pageNumber);
  }

}
