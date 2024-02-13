import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '../core/services/http.service';

export interface Dog {
  breedName: string;
  subBreeds: string[];
  url: string;
}

@Component({
  selector: 'app-display-dog-list',
  templateUrl: './display-dog-list.component.html',
  styleUrls: ['./display-dog-list.component.scss']
})
export class DisplayDogListComponent {
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
