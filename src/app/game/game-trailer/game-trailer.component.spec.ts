import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTrailerComponent } from './game-trailer.component';

describe('GameTrailerComponent', () => {
  let component: GameTrailerComponent;
  let fixture: ComponentFixture<GameTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTrailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
