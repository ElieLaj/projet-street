import { Fighter } from './fighter.model';

export class Ryu extends Fighter {

  constructor() {
    super('Ryu', 400, 300, 100);
    this.state = 'forward';
    this.frames = new Map<string, { width: number; height: number; offsetX: number; offsetY: number }[]>([
      [
        'idle',[
          { width: 43,
            height: 81,
            offsetX: 6,
            offsetY: 18, },
          { width: 43,
            height: 80,
            offsetX: 55,
            offsetY: 19, },
          { width: 43,
            height: 81,
            offsetX: 105,
            offsetY: 18, },
          { width: 43,
            height: 82,
            offsetX: 154,
            offsetY: 17, }
          ]
      ],
      [
        'forward',
        [
          { width: 43, height: 75, offsetX: 205, offsetY: 24 },
          { width: 43, height: 80, offsetX: 255, offsetY: 19 },
          { width: 43, height: 81, offsetX: 301, offsetY: 18 },
          { width: 43, height: 80, offsetX: 351, offsetY: 19 },
          { width: 43, height: 81, offsetX: 401, offsetY: 19 },
        ]
      ]
    ]);
  }
}
