import { Component } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public vacationItems$: Observable<any[]> = this.getVacationItems();
  getVacationItems(): Observable<any[]> {
    return of([
      {
        vacationType: 'DayOff',
        progressColor: '#79D1FD',
        progressInnerColor: '#0D99FF',
        totalDays: 5,
        availableDays: 3,
        anglesToRotate: -180,
      },
      {
        vacationType: 'Vacation for Year',
        progressColor: '#B09FFF',
        progressInnerColor: '#B09FFF',
        totalDays: 21,
        availableDays: 12,
        anglesToRotate: -90,
      },
    ]);
  }
}
