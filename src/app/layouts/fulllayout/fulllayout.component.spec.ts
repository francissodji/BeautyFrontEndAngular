import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulllayoutComponent } from './fulllayout.component';

describe('FulllayoutComponent', () => {
  let component: FulllayoutComponent;
  let fixture: ComponentFixture<FulllayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulllayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulllayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
