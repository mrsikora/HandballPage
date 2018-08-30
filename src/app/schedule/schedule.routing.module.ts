import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';



const scheduleRouting: Routes = [
  {
  path: '',
  component: ScheduleComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(scheduleRouting)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
