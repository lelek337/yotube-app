import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersInputComponent } from './filters-input.component';

describe('FiltersInputComponent', () => {
  let component: FiltersInputComponent;
  let fixture: ComponentFixture<FiltersInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersInputComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FiltersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
