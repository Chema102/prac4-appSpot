import { Component , Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',
  styleUrls: ['./targeta.component.css']
})
export class TargetaComponent {
  @Input() items: any[]=[];

  constructor(private ROUTER:Router) { }
  verArtista(item: any){
    let artistaId;

    if( item.type === "artist"){
      artistaId = item.id;

    }else{
      artistaId = item.artists[0].id;
    }
    this.ROUTER.navigate(['/artist',artistaId])




  }



}
