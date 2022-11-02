import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsCountComponent } from './coments-count.component';

describe('ComentsCountComponent', () => {
  let component: ComentsCountComponent;
  let fixture: ComponentFixture<ComentsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentsCountComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ComentsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
