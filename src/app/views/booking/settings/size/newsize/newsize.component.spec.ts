import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsizeComponent } from './newsize.component';

describe('NewsizeComponent', () => {
  let component: NewsizeComponent;
  let fixture: ComponentFixture<NewsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
