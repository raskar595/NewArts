import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arc'
})
export class ArcPipe implements PipeTransform {

  transform(value:any) {
    return 3.14*value*value;
  }

}
