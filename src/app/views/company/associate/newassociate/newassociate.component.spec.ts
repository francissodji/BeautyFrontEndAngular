import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewassociateComponent } from './newassociate.component';

describe('NewassociateComponent', () => {
  let component: NewassociateComponent;
  let fixture: ComponentFixture<NewassociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewassociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewassociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
