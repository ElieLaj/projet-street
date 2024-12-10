import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleCanvasComponent } from './battle-canvas.component';

describe('CanvasComponent', () => {
  let component: BattleCanvasComponent;
  let fixture: ComponentFixture<BattleCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
