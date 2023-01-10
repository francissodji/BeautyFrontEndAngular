import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelengthComponent } from './updatelength.component';

describe('UpdatelengthComponent', () => {
  let component: UpdatelengthComponent;
  let fixture: ComponentFixture<UpdatelengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
