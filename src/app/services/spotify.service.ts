import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQCAN4LuARqTA6lLcEUT-Heo2R-oNswnmbKkCl6isRggxsz0m2gyL_NaYRwZ40c-K_Kuiwm48lMeHPCZRZs';

  constructor(private http: HttpClient) { }

  getQuery(query: string ){
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + this.token
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    //         .pipe( map( ( data => {
    //           return data['albums'].items;
    //         })));

    return this.getQuery('browse/new-releases?limit=20')
        .pipe( map( ( data => data['albums'].items )));
    
    
  }

  getArtista(termino: string){

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + this.token
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    //           .pipe( map( data => data['artists'].items ));

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                  .pipe( map( data => data['artists'].items ));
  }
}
