import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlengthComponent } from './editlength.component';

describe('EditlengthComponent', () => {
  let component: EditlengthComponent;
  let fixture: ComponentFixture<EditlengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
