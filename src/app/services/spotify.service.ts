import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDvBEB4o9W_1sU3LAKKqgWaJ1qaeWx9Usx4yI6vEQNIaTz0D-8Q3vgK8BIx_QiShqE9DlHZG4_-FqGg2Hg';

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

  getArtistas(termino: string){

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer ' + this.token
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    //           .pipe( map( data => data['artists'].items ));

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                  .pipe( map( data => data['artists'].items ));
  }

  // https://api.spotify.com/v1/artists/{id}
  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( data => data['tracks'] ));
  }
}
