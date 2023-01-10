import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestyleComponent } from './updatestyle.component';

describe('UpdatestyleComponent', () => {
  let component: UpdatestyleComponent;
  let fixture: ComponentFixture<UpdatestyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
