import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { TestComponent } from './test/test.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ExamsComponent } from './exams/exams.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { SquarePipe } from './Pipes/square.pipe';
import { ArcPipe } from './Pipes/arc.pipe';
import { MypipeComponent } from './mypipe/mypipe.component';
import { MyGenderPipe } from './Pipes/my-gender.pipe';
import { StudentDataComponent } from './student-data/student-data.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreetingsComponent,
    TestComponent,
    DatabindingComponent,
    ToggleComponent,
    ExamsComponent,
    LoginComponent,
    Task1Component,
    SquarePipe,
    ArcPipe,
    MypipeComponent,
    MyGenderPipe,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
