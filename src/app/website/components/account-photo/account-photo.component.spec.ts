import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPhotoComponent } from './account-photo.component';

describe('AccountPhotoComponent', () => {
  let component: AccountPhotoComponent;
  let fixture: ComponentFixture<AccountPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPhotoComponent]
    });
    fixture = TestBed.createComponent(AccountPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
