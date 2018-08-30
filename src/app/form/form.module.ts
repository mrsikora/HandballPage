import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoadingSpinnerModule } from '../../shared/loading-spinner.module';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form.routing.module';


@NgModule({
  declarations: [
    FormComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    FormRoutingModule,
    HttpModule,
    HttpClientModule,
    LoadingSpinnerModule
  ]
})
export class FormModule {

 }
