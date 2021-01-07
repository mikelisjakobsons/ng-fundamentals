import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h3>{{event?.name | uppercase}}</h3>
      <div>Date: {{event?.date | date:'y-MM-dd'}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Early Start)</span> 
        <span *ngSwitchCase="'10:00 am'"> (Late Start)</span> 
        <span *ngSwitchDefault=""> (Normal Start)</span> 
      </div>
      <div *ngIf="event?.price">Prie: {{event?.price | currency:'USD'}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    h3 { margin-top: 4px; }
    .green { color: #00cc00 !important; }
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #ffD700; }
  `]
})
export class EventThumbnailComponent {
  @Input() event:IEvent

  getStartTimeClass(): any {
    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return []  
  }

}
