import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsModule } from './questions/questions.module';
import { Q1Component } from './q1/q1.component';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';
import { Q7Component } from './q7/q7.component';
import { Q8Component } from './q8/q8.component';
import { Q9Component } from './q9/q9.component';
import { Q10Component } from './q10/q10.component';


@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    CountriesComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    Q5Component,
    Q6Component,
    Q7Component,
    Q8Component,
    Q9Component,
    Q10Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    QuestionsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
