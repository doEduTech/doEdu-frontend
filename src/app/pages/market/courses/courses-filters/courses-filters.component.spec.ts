import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFiltersComponent } from './courses-filters.component';

describe('CoursesFiltersComponent', () => {
  let component: CoursesFiltersComponent;
  let fixture: ComponentFixture<CoursesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
