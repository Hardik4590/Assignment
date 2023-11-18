import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { CountriesComponent } from './countries/countries.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';
import { Q7Component } from './q7/q7.component';
import { Q8Component } from './q8/q8.component';
import { Q9Component } from './q9/q9.component';

const routes: Routes = [
  { path: 'assignment', component: Assignment1Component },
  { path: 'countries', component: CountriesComponent },
  { path: 'assignment1/q1', component: Q1Component },
  { path: 'assignment1/q2', component: Q2Component },
  { path: 'assignment1/q3', component: Q3Component },
  { path: 'assignment1/q4', component: Q4Component },
  { path: 'assignment1/q5', component: Q5Component },
  { path: 'assignment1/q6', component: Q6Component },
  { path: 'assignment1/q7', component: Q7Component },
  { path: 'assignment1/q8', component: Q8Component },
  { path: 'assignment1/q9', component: Q9Component },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: '/assignment', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
