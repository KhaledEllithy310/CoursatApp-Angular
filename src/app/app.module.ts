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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesSectionComponent } from './website/components/courses-section/courses-section.component';
import { AddCourseComponent } from './website/components/add-course/add-course.component';
import { InstructorAccountComponent } from './website/pages/instructor-account/instructor-account.component';
import { SidebarInstructorComponent } from './website/components/sidebar-instructor/sidebar-instructor.component';
import { AccountPhotoComponent } from './website/components/account-photo/account-photo.component';
import { AccountSecurityComponent } from './website/components/account-security/account-security.component';
import { AllCoursesComponent } from './website/components/all-courses/all-courses.component';
import { EditProfileComponent } from './website/components/edit-profile/edit-profile.component';
import { AddContentComponent } from './website/components/add-content/add-content.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { CountVideosPipe } from './pipes/count-videos.pipe';
import { CourseDetailsComponent } from './website/components/course-details/course-details.component';
import { StudentAccountComponent } from './pages/student-account/student-account.component';
import { MyWishListComponent } from './pages/my-wish-list/my-wish-list.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { MyLearningComponent } from './pages/my-learning/my-learning.component';
import { MyCoursesComponent } from './website/components/my-courses/my-courses.component';
import { EditContentComponent } from './pages/edit-content/edit-content.component';

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
    CoursesSectionComponent,
    AddCourseComponent,
    InstructorAccountComponent,
    SidebarInstructorComponent,
    AccountPhotoComponent,
    AccountSecurityComponent,
    AllCoursesComponent,
    EditProfileComponent,
    AddContentComponent,
    CountVideosPipe,
    CourseDetailsComponent,
    StudentAccountComponent,
    MyWishListComponent,
    MyCartComponent,
    MyLearningComponent,
    MyCoursesComponent,
    EditContentComponent,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
