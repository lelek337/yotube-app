import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersButtonsComponent } from './filters-buttons.component';

describe('FiltersButtonsComponent', () => {
  let component: FiltersButtonsComponent;
  let fixture: ComponentFixture<FiltersButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersButtonsComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FiltersButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
