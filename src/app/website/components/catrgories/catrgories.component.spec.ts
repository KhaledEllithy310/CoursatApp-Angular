import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrgoriesComponent } from './catrgories.component';

describe('CatrgoriesComponent', () => {
  let component: CatrgoriesComponent;
  let fixture: ComponentFixture<CatrgoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatrgoriesComponent]
    });
    fixture = TestBed.createComponent(CatrgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
