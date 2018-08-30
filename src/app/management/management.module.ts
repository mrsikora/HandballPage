import { NgModule } from '@angular/core';
import { ManagementComponent } from './management.component';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management.routing.module';




@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
