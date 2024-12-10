import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BattleCanvasComponent } from './views/battle-canvas/battle-canvas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BattleCanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projet-street';
}
