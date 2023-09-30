import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAccountComponent } from './student-account.component';

describe('StudentAccountComponent', () => {
  let component: StudentAccountComponent;
  let fixture: ComponentFixture<StudentAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAccountComponent]
    });
    fixture = TestBed.createComponent(StudentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
