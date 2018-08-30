import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list.component';
import { NewsComponent } from './news.component';

const readerRouting: Routes = [
  {
  path: '',
  component: NewsListComponent
  },
  {
    path: ':id',
    component: NewsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(readerRouting)],
  exports: [RouterModule]
})
export class ReaderRoutingModule { }
