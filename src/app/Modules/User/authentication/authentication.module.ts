import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from "./authentication.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from "@angular/forms";


const route: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class AuthenticationModule {
}
