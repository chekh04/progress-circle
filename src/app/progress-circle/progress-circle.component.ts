import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressCircleComponent implements AfterViewInit{
  @ViewChild('circle') circle!: ElementRef;
  @Input() progressColor = '#79D1FD';
  @Input() rotatePerAngle = -90;
  @Input() progressInnerColor = '#0D99FF';
  @Input() progressPercent = 75;
  @Input() value = 0;
  public radius = 75.5;

  get circleLength(): number {
    return 2 * Math.PI * this.radius;
  }
  constructor(private cdr: ChangeDetectorRef) {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.value = this.progressPercent / 100;
      this.cdr.markForCheck();
    }, 100)
  }

  public getStrokeOffset(): number {
    return (1 - this.value) * this.circleLength;
  }
}
