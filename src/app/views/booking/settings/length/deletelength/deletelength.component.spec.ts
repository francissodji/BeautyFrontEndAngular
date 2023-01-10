import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelengthComponent } from './deletelength.component';

describe('DeletelengthComponent', () => {
  let component: DeletelengthComponent;
  let fixture: ComponentFixture<DeletelengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
