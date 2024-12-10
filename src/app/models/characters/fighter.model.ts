export class Fighter {
  name: string;
  health: number;
  attackPower: number;
  defense: number;
  sprite: string;
  position: { x: number; y: number };
  frames: Map<string, { width: number; height: number; offsetX: number; offsetY: number }[]>;
  currentFrame: number;
  velocity: number;
  state: 'idle' | 'attack' | 'forward' | 'defend' | 'hit' | 'dead';
  animationTimer: number = 0;

  constructor(name: string, x: number, y: number, velocity: number) {
    this.name = name;
    this.health = 100;
    this.attackPower = 20;
    this.defense = 10;
    this.velocity = velocity;
    this.sprite = 'assets/sprites/'+name+'.png'; 
    this.position = { x, y };
    this.frames = new Map<string, { width: number; height: number; offsetX: number; offsetY: number }[]>();
    this.currentFrame = 0;
    this.state = 'idle';
  }

   update(time: { previous: number; passed: number }, context: CanvasRenderingContext2D): void {
    // Gérer le changement de frame en fonction du délai
    if (time.previous > this.animationTimer + 150) {
      this.animationTimer = time.previous; // Réinitialise le timer
      this.currentFrame++;

      const stateFrames = this.frames.get(this.state);
      if (stateFrames && this.currentFrame >= stateFrames.length) {
        this.currentFrame = 0;
      }
    }

    // Gérer le déplacement du personnage
    if (this.state === 'forward') {
      this.position.x += this.velocity * time.passed;
    }

    // Collision avec les bords du canvas
    const stateFrames = this.frames.get(this.state);
    if (stateFrames && (this.position.x > context.canvas.width - stateFrames[this.currentFrame].width || this.position.x < 0)) {
      this.velocity = -this.velocity;
    }
  }


  draw(context: CanvasRenderingContext2D, sprite: HTMLImageElement): void {
    const stateFrames = this.frames.get(this.state);
    if (!stateFrames) {
      console.error(`Frames not defined for state: ${this.state}`);
      return;
    }


    const frame = stateFrames[this.currentFrame];
    if (!frame) {
      console.error(`Frame not defined for index: ${this.currentFrame}`);
      return;
    }

    context.drawImage(
      sprite,
      frame.offsetX, frame.offsetY,
      frame.width, frame.height,
      this.position.x, this.position.y,
      80, 100
    );
  }
}
