import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdoneappointmentComponent } from './jobdoneappointment.component';

describe('JobdoneappointmentComponent', () => {
  let component: JobdoneappointmentComponent;
  let fixture: ComponentFixture<JobdoneappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobdoneappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdoneappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
