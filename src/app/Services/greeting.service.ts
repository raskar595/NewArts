import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

 public goodMorning(){
  console.log("Good Morning myself Suraj Raskar.");
 }

 public birthday(){
  console.log("Happy birthday Suraj.");
 }

 public goodNight(){
  console.log("good Night, Let's Pack-up for Today");
 }

}
