import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTaskListingComponent } from './open-task-listing.component';

describe('OpenTaskListingComponent', () => {
  let component: OpenTaskListingComponent;
  let fixture: ComponentFixture<OpenTaskListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTaskListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTaskListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
