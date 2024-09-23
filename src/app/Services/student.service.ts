import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl="http://localhost:3000";

  constructor(private http:HttpClient) { }

  public getStudents(){
    return this.http.get(this.baseUrl+"/Student");
  }

}
