import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlengthComponent } from './listlength.component';

describe('ListlengthComponent', () => {
  let component: ListlengthComponent;
  let fixture: ComponentFixture<ListlengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
