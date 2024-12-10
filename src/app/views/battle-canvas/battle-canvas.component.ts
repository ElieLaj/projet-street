// src/app/components/battle-canvas/battle-canvas.component.ts
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Cammy } from '../../models/characters/cammy.model';
import { Ryu } from '../../models/characters/ryu.model';
import { DojoStage } from '../../models/stages/port.model';
import { Fighter } from '../../models/characters/fighter.model';

@Component({
  selector: 'app-battle-canvas',
  templateUrl: './battle-canvas.component.html',
  styleUrls: ['./battle-canvas.component.scss'],
})
export class BattleCanvasComponent implements OnInit {
  @ViewChild('battleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private loadedSprites: { [key: string]: HTMLImageElement } = {};

  fighters: Fighter[] = [new Cammy(), new Ryu()];
  stage = DojoStage;
  backgroundImage!: HTMLImageElement;
  cammy = new Cammy();
  ryu = new Ryu();
  currentFrameIndex = 0;
  animationInterval!: any;
  frameTime: { previous: number; passed: number } = { previous: 0, passed: 0 };

  ngOnInit(): void {
    console.log('init')
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.loadAssetsAndRender();
  }

  startAnimation = (time: number): void => {
  window.requestAnimationFrame(this.startAnimation);

    this.frameTime = {
      passed: (time - this.frameTime.previous) / 1000,
      previous: time,
    }
    
    for (const fighter of this.fighters) {
      fighter.update(this.frameTime, this.ctx);
    }

    this.updateCanvas();

  }

  async loadAssetsAndRender(): Promise<void> {
    this.backgroundImage = await this.loadImage(this.stage.background);

    for (const fighter of this.fighters) {
      console.log(fighter)
      this.loadedSprites[fighter.name] = await this.loadImage(fighter.sprite);
    }

    window.requestAnimationFrame(this.startAnimation)
  }

  

  updateCanvas(): void {
    this.ctx.clearRect(0, 0, 800, 500);

    this.ctx.drawImage(this.backgroundImage, 0, 0, 800, 500);

    for (const fighter of this.fighters) {
      fighter.draw(this.ctx, this.loadedSprites[fighter.name]);
    }
  }

  loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src.toLowerCase();
    });
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }
}
