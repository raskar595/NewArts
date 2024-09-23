import { Component } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {

  constructor(private studSer:StudentService){}
  studArray:any;

  ngOnInit(){
    this.getRecords();
  }

  getRecords(){
    this.studSer.getStudents().subscribe(
      (resp)=>{
        console.log(resp);
        this.studArray=resp;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
