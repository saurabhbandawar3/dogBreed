import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { lastValueFrom } from 'rxjs';

export interface Dog {
  breedName: string;
  subBreeds: string[];
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  dogList: Dog[] = [];
  dogListCp: Dog[] = [];
  searchText: string = '';

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getDogBreedList().subscribe((resp: any) => {

      Object.keys(resp.message).map(async (eachkey: any) => {
        const categories$ = this.httpService.getDogBreedImg(eachkey);
        let temp: any = await lastValueFrom(categories$);
        this.dogList.push({
          breedName: eachkey,
          subBreeds: resp.message[eachkey],
          url: temp.message
        })
        this.dogList = this.dogList;
        this.dogListCp = JSON.parse(JSON.stringify(this.dogList));
      });
    })
  }

  public changed(ev: string) {
    if (ev === '') {
      this.dogList = this.dogListCp;
    }
    const filteredDogList = this.dogListCp.filter((item: any) => {
      return item['breedName'].toLowerCase().includes(ev);
    });
    this.dogList = filteredDogList;
  }
}

