import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsrbRatingComponent } from './esrb-rating.component';

describe('EsrbRatingComponent', () => {
  let component: EsrbRatingComponent;
  let fixture: ComponentFixture<EsrbRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsrbRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsrbRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
