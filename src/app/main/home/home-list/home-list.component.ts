import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../../shared/services/json-placeholder/json-placeholde.service';
import { Image } from '../../../shared/models/image';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
})
export class HomeListComponent implements OnInit {
  photos: Image[] = [];
  pageNumber = 1;
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  getRequestHelper(pageNum: number): void {
    this.jsonPlaceholderService
      .sendGetRequest(pageNum)
      .subscribe((data: any) => {
        this.photos = data;
      });
  }

  ngOnInit(): void {
    this.getRequestHelper(this.pageNumber);
  }

  nextPage(): void {
    this.pageNumber++;
    this.getRequestHelper(this.pageNumber);
  }

  previousPage() {
    if (this.pageNumber === 1) {
      return;
    }
    this.pageNumber--;
    this.getRequestHelper(this.pageNumber);
  }
}
