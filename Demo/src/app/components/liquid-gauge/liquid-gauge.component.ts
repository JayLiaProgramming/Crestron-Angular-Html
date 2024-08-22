import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-liquid-gauge',
  templateUrl: './liquid-gauge.component.html',
  styleUrls: ['./liquid-gauge.component.scss']
})
export class LiquidGaugeComponent implements OnInit {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() value: number = 50;
  @Input() fillColor: string = '#00BFFF';
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';

  constructor() {}

  ngOnInit(): void {}

  get fillPercentage(): number {
    const range = this.max - this.min;
    const adjustedValue = this.value - this.min;
    return (adjustedValue / range) * 100;
  }

  get fillStyle(): any {
    if (this.orientation === 'vertical') {
      return {
        height: this.fillPercentage + '%',
        width: '100%',
        backgroundColor: this.fillColor,
      };
    } else {
      return {
        width: this.fillPercentage + '%',
        height: '100%',
        backgroundColor: this.fillColor,
      };
    }
  }
}
