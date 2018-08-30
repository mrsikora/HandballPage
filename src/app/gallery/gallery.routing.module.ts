import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';


const galleryRouting: Routes = [
  {
  path: '',
  component: GalleryComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(galleryRouting)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
