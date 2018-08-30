
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventService } from './event.service';
import { ScheduleComponent } from './schedule.component';
import { ScheduleRoutingModule } from './schedule.routing.module';
import { FullCalendarModule } from 'ng-fullcalendar';


@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ScheduleRoutingModule,
  ],
  providers: [EventService],
  exports: [ScheduleComponent]
})
export class ScheduleModule { }
