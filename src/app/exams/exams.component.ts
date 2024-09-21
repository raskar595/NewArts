import { Component } from '@angular/core';
import { SemesterService } from '../Services/semester.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {

  constructor(private semSer:SemesterService){}

  sem1(){
    this.semSer.semI();
  }
  sem2(){
    this.semSer.semII();
  }
  sem3(){
    this.semSer.semIII();
  }
  sem4(){
    this.semSer.semIV();
  }
  sem5(){
    this.semSer.semV();
  }
  sem6(){
    this.semSer.semVI();
  }

}
