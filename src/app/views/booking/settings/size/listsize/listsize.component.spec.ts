import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsizeComponent } from './listsize.component';

describe('ListsizeComponent', () => {
  let component: ListsizeComponent;
  let fixture: ComponentFixture<ListsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
