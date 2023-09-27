import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { CoursesComponent } from './website/pages/courses/courses.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileStudentComponent } from './website/pages/profile-student/profile-student.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register-student',
    component: RegisterComponent,
  },
  {
    path: 'register-instructor',
    component: RegisterComponent,
  },
  {
    path: 'profile-student',
    component: ProfileStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
