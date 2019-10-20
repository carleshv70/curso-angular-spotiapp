import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any = {};
  loadingArtist: boolean;
  loadigTracks: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {

    this.loadingArtist = true;
    this.loadigTracks = true;

    this.activatedRoute.params.subscribe(params => {

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.spotifyService.getArtista(id)
      .subscribe(data => {
        this.artista = data;
        console.log(data)
        this.loadingArtist = false;
      });
  }

  getTopTracks(id: string) {

    this.spotifyService.getTopTracks(id)
      .subscribe(data => {
        
        console.log(data);
        this.topTracks = data;
        this.loadigTracks = false;
        
      });
  }


}
