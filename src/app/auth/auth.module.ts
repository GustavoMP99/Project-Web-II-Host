import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing';
import { MaterialModule } from '../material/material.module';


//Pages
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
