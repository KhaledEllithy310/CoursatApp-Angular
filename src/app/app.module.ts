import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './website/components/card/card.component';
import { NavbarComponent } from './website/shared/navbar/navbar.component';
import { FooterComponent } from './website/shared/footer/footer.component';
import { HomeComponent } from './website/pages/home/home.component';
import { CoursesComponent } from './website/pages/courses/courses.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { ProfileStudentComponent } from './website/pages/profile-student/profile-student.component';
import { ProfileInstructorComponent } from './website/pages/profile-instructor/profile-instructor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatrgoriesComponent } from './website/components/catrgories/catrgories.component';
import { HomeSectionComponent } from './website/components/home-section/home-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileStudentComponent,
    ProfileInstructorComponent,
    DashboardComponent,
    CatrgoriesComponent,
    HomeSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
