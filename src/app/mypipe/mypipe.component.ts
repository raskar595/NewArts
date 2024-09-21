import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrls: ['./mypipe.component.css']
})
export class MypipeComponent {

  cars:any=["Swift","Baleno","Maruti Suzuki","Kwid"];

  val="Today is holiday";

  students:any=[
    {id:101,name:"Suraj Raskar",city:"Pune",marks:77,gender:"male"},
    {id:102,name:"Dhiraj Raskar",city:"Warje",marks:77,gender:"male"},
    {id:103,name:"Rohan Raskar",city:"Nagar",marks:87,gender:"male"},
    {id:104,name:"Neha Raskar",city:"Satara",marks:97,gender:"female"},
    {id:105,name:"Raviraj Raskar",city:"Pune",marks:77,gender:"male"},
    {id:106,name:"Yash Raskar",city:"Pune",marks:77,gender:"male"},
    {id:107,name:"Manoj Raskar",city:"Nira",marks:77,gender:"male"}
  ]



}
