import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  jsonPlaceHolderApi(pageNumber: number = 1) {
    const JSON_PLACEHOLDER_API = `https://jsonplaceholder.typicode.com/photos?albumId=${pageNumber}`;
    return JSON_PLACEHOLDER_API;
  }
  constructor(private http: HttpClient) {}

  public sendGetRequest(pageNumber: number) {
    return this.http.get(this.jsonPlaceHolderApi(pageNumber));
  }
}
