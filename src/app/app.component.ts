import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-with-electron-poc';
  location: string;

  constructor(private Location: Location) {
    this.location = '';
  }

  ngDoCheck() {
    this.location = this.Location.path();
  }
}
