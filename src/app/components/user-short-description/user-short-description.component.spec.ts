import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShortDescriptionComponent } from './user-short-description.component';

describe('UserShortDescriptionComponent', () => {
  let component: UserShortDescriptionComponent;
  let fixture: ComponentFixture<UserShortDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShortDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
