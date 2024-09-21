import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  imgPath="../../assets/education.png";
  imgName="Educational Image";
  isVal=true;

  toggle(){
    this.isVal= !this.isVal;
    if(this.isVal){
      this.imgPath="../../assets/education.png";
      this.imgName="Educational Image";
    }
    else{
      this.imgPath="../../assets/पांडुरंग हरी वासुदेव हरी.webp";
      this.imgName="Mrudung Vadan";
    }
  }

}
