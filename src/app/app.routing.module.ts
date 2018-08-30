import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

const appRoutes: Routes = [
  // lazy loading
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'management',
    loadChildren: './management/management.module#ManagementModule'
  },
  {
    path: 'players',
    loadChildren: './players/players.module#PlayersModule'
  },
  {
    path: 'news',
    loadChildren: './reader/reader.module#ReaderModule'
  },
  {
    path: 'schedule',
    loadChildren: './schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'gallery',
    loadChildren: './gallery/gallery.module#GalleryModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'form',
    loadChildren: './form/form.module#FormModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    NgProgressModule.forRoot(),
    NgProgressRouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
