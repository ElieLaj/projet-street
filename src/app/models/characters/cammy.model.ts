import { Fighter } from './fighter.model';

export class Cammy extends Fighter {
  constructor() {
    super('Cammy', 50, 300, 12);
    this.frames = new Map<string, { width: number; height: number; offsetX: number; offsetY: number }[]>([
      [
        'idle',[
          { width: 47, height: 82, offsetX: 5, offsetY: 31 },
          { width: 47, height: 83, offsetX: 59, offsetY: 31 },
          { width: 47, height: 84, offsetX: 111, offsetY: 29 },
          { width: 47, height: 83, offsetX: 164, offsetY: 30 },
          { width: 47, height: 82, offsetX: 217, offsetY: 31 }
        ]
      ]
    ]);
  }
}

