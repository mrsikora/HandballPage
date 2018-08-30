import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  calendarOptions: Options;

  constructor(protected eventService: EventService) {
  }

  ngOnInit() {
     this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        locale: 'pl',
        header: {
          left: 'prev,next',
          center: 'title',
          right: ''
        },
         events: data
      };
     });
  }
}
