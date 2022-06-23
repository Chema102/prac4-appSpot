import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cajaShear: any=[];
  loading: boolean= false;

  constructor( private _spoti: SpotifyService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    //console.log(termino);
    this._spoti.getArtist(termino).subscribe( (data: any) =>{
      this.loading = true;
      this.cajaShear = data;
      //console.log(this.cajaShear);
      this.loading = false;
    });


  }

}
