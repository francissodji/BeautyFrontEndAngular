import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesizeComponent } from './deletesize.component';

describe('DeletesizeComponent', () => {
  let component: DeletesizeComponent;
  let fixture: ComponentFixture<DeletesizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletesizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
