import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { TestComponent } from './test/test.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ExamsComponent } from './exams/exams.component';
import { LoginComponent } from './login/login.component';
import { Task1Component } from './task1/task1.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"greetings",component:GreetingsComponent},
  {path:"test",component:TestComponent},
  {path:"databinding",component:DatabindingComponent},
  {path:"toggle",component:ToggleComponent},
  {path:"exams",component:ExamsComponent},
  {path:"task1",component:Task1Component},
  {path:"mypipe",component:MypipeComponent},
  {path:"student-data",component:StudentDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
