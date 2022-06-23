import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from "../../services/spotify.service";


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent  {

  caja: any ={};
  cajaTop: any =[];
  loading:boolean =true;
  constructor(private _activated:ActivatedRoute,
              private _servicio:SpotifyService
              ) {

    this._activated.params.subscribe(data =>{

      console.log(data["id"]);
      this.getArtista(data["id"]);
      this.getTop(data["id"]);


    });

   }

   getTop(id:string){
    this._servicio.getTopTracks(id).subscribe(data =>{
      this.cajaTop = data
      console.log(this.cajaTop);

    })

   }
   getArtista( id:string){
    this.loading = true;
    this._servicio.getArtita(id).subscribe( artista =>{
      this.caja = artista;
      //console.log(this.caja);
      this.loading = false;
    });

   }

}
