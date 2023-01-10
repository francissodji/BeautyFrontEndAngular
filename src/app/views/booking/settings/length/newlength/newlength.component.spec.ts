import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlengthComponent } from './newlength.component';

describe('NewlengthComponent', () => {
  let component: NewlengthComponent;
  let fixture: ComponentFixture<NewlengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
