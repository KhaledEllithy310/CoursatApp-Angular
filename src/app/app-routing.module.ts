import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { CoursesComponent } from './website/pages/courses/courses.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileStudentComponent } from './website/pages/profile-student/profile-student.component';
import { ProfileInstructorComponent } from './website/pages/profile-instructor/profile-instructor.component';
import { AddCourseComponent } from './website/components/add-course/add-course.component';
import { InstructorAccountComponent } from './website/pages/instructor-account/instructor-account.component';
import { AccountPhotoComponent } from './website/components/account-photo/account-photo.component';
import { AllCoursesComponent } from './website/components/all-courses/all-courses.component';
import { AccountSecurityComponent } from './website/components/account-security/account-security.component';
import { EditProfileComponent } from './website/components/edit-profile/edit-profile.component';
import { AddContentComponent } from './website/components/add-content/add-content.component';
import { canActivateChildGuard } from './guards/can-activate-child.guard';
import { CourseDetailsComponent } from './website/components/course-details/course-details.component';

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
  {
    path: 'profile-instructor',
    component: ProfileInstructorComponent,
  },
  // {
  //   path: 'profile-instructor/',
  //   component: AddCourseComponent,
  // },
  {
    path: 'instructor-account',
    component: InstructorAccountComponent,
    canActivateChild: [canActivateChildGuard],
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
      },
      {
        path: 'add-content',
        component: AddContentComponent,
      },
      {
        path: 'profile',
        component: ProfileInstructorComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
      {
        path: 'photo',
        component: AccountPhotoComponent,
      },
      {
        path: 'account-security',
        component: AccountSecurityComponent,
      },
      {
        path: 'all-Courses',
        component: AllCoursesComponent,
      },
      {
        path: 'course-details/:courseId',
        component: CourseDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
