import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getDogBreedList() {
    let dogListUrl = 'https://dog.ceo/api/breeds/list/all';
    return this.http.get(dogListUrl);
  }

  public getDogBreedImg(breedName?: string) {
    let dogListUrl = `https://dog.ceo/api/breed/${breedName}/images/random`;
    return this.http.get(dogListUrl);
  }
}
