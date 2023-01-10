import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesizeComponent } from './updatesize.component';

describe('UpdatesizeComponent', () => {
  let component: UpdatesizeComponent;
  let fixture: ComponentFixture<UpdatesizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
