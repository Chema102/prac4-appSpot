
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  caja: any=[];
  loading: boolean = true;


  constructor( private _spoti: SpotifyService ) {

    this._spoti.getNewReleases().subscribe((data:any) => {

      this.loading = true;
      this.caja = data;
      console.log(this.caja);


      this.loading = false;

    });

   }



}
