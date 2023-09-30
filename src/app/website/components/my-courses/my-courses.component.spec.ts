import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesComponent } from './MyCoursesComponent';

describe('MyCoursesComponent', () => {
  let component: MyCoursesComponent;
  let fixture: ComponentFixture<MyCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCoursesComponent],
    });
    fixture = TestBed.createComponent(MyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
