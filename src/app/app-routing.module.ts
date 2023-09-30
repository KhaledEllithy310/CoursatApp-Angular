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
import { StudentAccountComponent } from './pages/student-account/student-account.component';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';
import { MyWishListComponent } from './pages/my-wish-list/my-wish-list.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { sharedRoutesGuard } from './guards/shared-routes.guard';
import { MyCoursesComponent } from './website/components/my-courses/my-courses.component';
import { EditContentComponent } from './pages/edit-content/edit-content.component';

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
    data: { type: 'student' },
  },
  {
    path: 'register-instructor',
    component: RegisterComponent,
    data: { type: 'instructor' },
  },
  {
    path: 'register-instructor',
    component: RegisterComponent,
  },
  {
    path: 'myCart',
    component: MyCartComponent,
  },
  // {
  //   path: 'profile-student',
  //   component: ProfileStudentComponent,
  // },
  // {
  //   path: 'profile-instructor',
  //   component: ProfileInstructorComponent,
  // },
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
        canActivateChild: [sharedRoutesGuard],
      },
      {
        // instructor-account/all-Courses
        path: 'edit-profile',
        component: EditProfileComponent,
        canActivateChild: [sharedRoutesGuard],
      },
      {
        path: 'photo',
        component: AccountPhotoComponent,
        canActivateChild: [sharedRoutesGuard],
      },
      {
        path: 'account-security',
        component: AccountSecurityComponent,
        canActivateChild: [sharedRoutesGuard],
      },
      // {
      //   path: 'all-Courses',
      //   component: AllCoursesComponent,
      // },
      {
        path: 'my-Courses',
        component: MyCoursesComponent,
      },
      {
        path: 'course-details/:courseId',
        component: CourseDetailsComponent,
        canActivateChild: [sharedRoutesGuard],
      },
      {
        path: 'edit-content/:contentId/:courseId',
        component: EditContentComponent,
        canActivateChild: [sharedRoutesGuard],
      },
    ],
  },
  {
    path: 'student-account',
    component: StudentAccountComponent,
    // canActivateChild: [canActivateChildGuard],
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
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
        path: 'myCart',
        component: MyCartComponent,
      },
      {
        path: 'wishList',
        component: MyWishListComponent,
      },
      {
        path: 'myLearning',
        component: MyLearningComponent,
      },
      {
        path: 'course-details/:courseId',
        component: CourseDetailsComponent,
        canActivateChild: [sharedRoutesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
