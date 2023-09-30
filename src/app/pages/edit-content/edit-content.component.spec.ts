import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContentComponent } from './edit-content.component';

describe('EditContentComponent', () => {
  let component: EditContentComponent;
  let fixture: ComponentFixture<EditContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditContentComponent]
    });
    fixture = TestBed.createComponent(EditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
