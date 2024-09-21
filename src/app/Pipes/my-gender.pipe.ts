import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myGender'
})
export class MyGenderPipe implements PipeTransform {

  transform(value:any, gender:any) {
   
    if(gender.toLocaleLowerCase()=="male"){
      return "Mr."+value;
    }
    else{
      return "Mrs."+value;
    }

  }

}
