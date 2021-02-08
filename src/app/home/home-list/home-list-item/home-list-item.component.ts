import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home-list-item',
  templateUrl: './home-list-item.component.html',
  styleUrls: ['./home-list-item.component.css']
})
export class HomeListItemComponent implements OnInit {
  @Input() photoData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
