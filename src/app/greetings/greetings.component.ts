import { Component } from '@angular/core';
import { GreetingService } from '../Services/greeting.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {


  constructor(private greetSer:GreetingService){}

  birthday(){
    this.greetSer.birthday();
  }

  morning(){
    this.greetSer.goodMorning();
  }

}
