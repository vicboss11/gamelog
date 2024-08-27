import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardAddComponent } from './game-card-add.component';

describe('GameCardAddComponent', () => {
  let component: GameCardAddComponent;
  let fixture: ComponentFixture<GameCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
