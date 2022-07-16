import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallappointnewstateComponent } from './listallappointnewstate.component';

describe('ListallappointnewstateComponent', () => {
  let component: ListallappointnewstateComponent;
  let fixture: ComponentFixture<ListallappointnewstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallappointnewstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallappointnewstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
