import { HomeComponent } from './home.component';
import { SliderMainPageComponent } from '../slider-main-page/slider-main-page.component';
import { PopupMainPageComponent } from '../popup-main-page/popup-main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner.component';
import { LoadingSpinnerModule } from '../../shared/loading-spinner.module';


@NgModule({
  declarations: [
    HomeComponent,
    SliderMainPageComponent,
    PopupMainPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ScheduleModule,
    // moduls needed to contact form in popup-main-page
    ReactiveFormsModule,
    //  to slider
    NgbModule.forRoot(),
    LoadingSpinnerModule
  ]
})
export class HomeModule { }
