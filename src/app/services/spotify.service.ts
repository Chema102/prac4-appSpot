import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  map  } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  caja: any[]=[];

  constructor(private _http:HttpClient) {


   }
   getUrlSpoti(faltante:string){
    const url = `https://api.spotify.com/v1/${faltante}`;
    const clabe ="Bearer BQBhRjS0QGaFEPW2B7MDuVl71rlx0IhaFS2sHpiRnG_vkBXoyJnEd6Ph_-EdxFgKlf4aE3WqNngwC5XzOSsClTbyQdZpO-0O4IgWftxSb1T_tcnk6Ns"

    const headers = new HttpHeaders({
      "Authorization":clabe,

    });
    return this._http.get(url,{headers});
   }

   getNewReleases(){
    return this.getUrlSpoti("browse/new-releases").pipe(map( (data:any) => data.albums.items));
   }

   getArtist( termino:string ){
    return this.getUrlSpoti(`search?q=${termino}&type=artist&offset=15`).pipe(map( (data: any) => data.artists.items));
   }
   getArtita( id:string ){
    return this.getUrlSpoti(`artists/${id}`);
   }
   getTopTracks( id:string ){
    return this.getUrlSpoti(`artists/${id}/top-tracks?market=ES`).pipe(map( (data: any) => data.tracks));
   }

}
