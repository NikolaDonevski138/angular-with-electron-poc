import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../../shared/models/image';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.css'],
})
export class HomeListItemComponent implements OnInit {
  @Input() photoData: Image;
  constructor() {
    this.photoData = {
      id: '',
      albumId: '',
      thumbnailUrl: '',
      title: '',
      url: '',
    };
  }

  ngOnInit(): void {}
}
