import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstyleComponent } from './editstyle.component';

describe('EditstyleComponent', () => {
  let component: EditstyleComponent;
  let fixture: ComponentFixture<EditstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
