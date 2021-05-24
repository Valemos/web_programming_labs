import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoGitHubComponent } from './user-info-git-hub.component';

describe('UserInfoGitHubComponent', () => {
  let component: UserInfoGitHubComponent;
  let fixture: ComponentFixture<UserInfoGitHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoGitHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
