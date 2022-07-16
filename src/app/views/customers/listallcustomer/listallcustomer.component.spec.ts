import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallcustomerComponent } from './listallcustomer.component';

describe('ListallcustomerComponent', () => {
  let component: ListallcustomerComponent;
  let fixture: ComponentFixture<ListallcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
