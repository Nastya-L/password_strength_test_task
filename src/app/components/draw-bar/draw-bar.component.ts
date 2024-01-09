import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-draw-bar',
  standalone: true,
  imports: [],
  templateUrl: './draw-bar.component.html',
  styleUrl: './draw-bar.component.scss'
})

export class drawBarComponent implements OnChanges {
  colorInactive: string = 'gray';
  colorStrong: string = 'green';
  colorEasy: string = 'red';
  colorMedium: string = 'yellow';
  indicatorSectionColor: string[] = [this.colorInactive, this.colorInactive, this.colorInactive];

  @Input() strength: number;
  @Input() incorrect: boolean;

  constructor () {
    this.strength = 0;
    this.incorrect = false;
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['strength'] || changes['incorrect']) {
      this.display(this.strength, this.incorrect);
    }
  }

  fillBars (n: number, color: string): void {
    for (let i: number = 0; i < this.indicatorSectionColor.length; i += 1) {
      if ((i + 1) <= n) {
        this.indicatorSectionColor[i] = color;
      } else {
        this.indicatorSectionColor[i] = this.colorInactive;
      }
    }
  }

  getColor (level: number): string {
    const colors: string[] = [this.colorInactive, this.colorEasy, this.colorMedium, this.colorStrong];

    if (level >= colors.length) {
      level = 0;
    }
    return colors[level];
  }

  display (strength: number, incorrect: boolean): void {
    if (incorrect) {
      this.fillBars(3, this.colorEasy);
    } else {
      this.fillBars(strength, this.getColor(strength));
    }
  }
}
