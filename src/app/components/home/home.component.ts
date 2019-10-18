import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  //  paises: any[] = [];

  //constructor(private http: HttpClient) {
    //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (resp: any) => {
    //     this.paises = resp;
    //     console.log(resp);
    //   })
  //}

  constructor(private spotifyService:SpotifyService){
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
      } )
  }

  ngOnInit() {
  }

}
