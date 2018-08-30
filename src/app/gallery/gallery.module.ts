import { GalleryComponent } from './gallery.component';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery.routing.module';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoadingSpinnerModule } from '../../shared/loading-spinner.module';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HttpModule,
    HttpClientModule,
    LoadingSpinnerModule
  ]
})
export class GalleryModule {

 }
