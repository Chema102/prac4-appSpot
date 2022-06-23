import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform( images: any[]): string {
    if ( !images) {
      return "assets/img/noImg";
    }
    if ( images.length > 0) {
      return images[1].url
    }else{
      return "assets/img/noImg.png";
    }
    return "";
  }

}
