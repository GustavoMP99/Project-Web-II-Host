import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Pages
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  { path: '', 
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'forgot', component: ForgotComponent },
        { path: '**', redirectTo: 'login'}
    ]
  }, 
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [],
})
export class AuthRoutingModule { }
