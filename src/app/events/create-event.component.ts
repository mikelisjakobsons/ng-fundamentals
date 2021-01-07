import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/index'

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
      em {float:right; color:#E05C65; padding-left: 10px;}
      .error input {background-color:#E3C3C5;}
      .error ::-webkit-input-placeholder { color: #999 }
      .error ::-moz-placeholder { color: #999 }
      .error :-moz-placeholder { color: #999 }
     .error :ms-input-placeholder { color: #999 }
    `]
})
export class CreateEventComponent {
  isDirty:Boolean = true
  //event:any

  constructor(private router: Router, private eventService:EventService) {

  }

  ngOnInit() {
  /*  this.event = {
      name: 'Ng Spectacular',
      date: '8/8/2028',
      time: '10 am',
      price: 799.99,
      location: {
        address: '456 Happy st.',
        city: 'Felecity',
        country: 'Angularistan'
      },
      onlineUrl: "http://ngSpectacular.com",
      imageUrl: "http://ngSpectacular.com/loco.png"
    } */
  }

  saveEvent(formValues) {
    console.log(formValues)
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}