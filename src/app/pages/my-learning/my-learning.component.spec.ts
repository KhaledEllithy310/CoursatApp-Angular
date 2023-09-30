import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearningComponent } from './my-learning.component';

describe('MyLearningComponent', () => {
  let component: MyLearningComponent;
  let fixture: ComponentFixture<MyLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLearningComponent]
    });
    fixture = TestBed.createComponent(MyLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
