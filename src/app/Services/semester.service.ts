import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor() { }

  semI(){
    console.log("Firt Semister..");
  }
  semII(){
    console.log("Second Semister..");
  }
  semIII(){
    console.log("Third Semister..");
  }
  semIV(){
    console.log("Fourth Semister..");
  }
  semV(){
    console.log("Fifth Semister..");
  }
  semVI(){
    console.log("Sixth Semister..");
  }


}
