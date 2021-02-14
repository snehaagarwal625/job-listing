import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from "./shared/api.service"
import { OtpComponent } from './otp/otp.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';  
import { AddJobComponent } from './add-job/add-job.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppliedbyComponent } from './appliedby/appliedby.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {MatDividerModule} from '@angular/material/divider';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    OtpComponent,
    HeaderComponent,
    AddJobComponent,
    AppliedbyComponent,
    MyProfileComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDividerModule
  ],
  providers: [ApiService, AddJobComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
