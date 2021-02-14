import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: 'my-profile',
      component: MyProfileComponent,
    }]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'otp',
    component: OtpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
