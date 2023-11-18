// auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'; // Adjust the path based on your project structure
import { SignupComponent } from './signup/signup.component'; // Adjust the path based on your project structure
import { AuthRoutingModule } from './auth-routing.module'; 

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
  ],
})
export class AuthModule {}
