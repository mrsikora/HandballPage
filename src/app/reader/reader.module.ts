import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list.component';
import { ReaderRoutingModule } from './reader.routing.module';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { LoadingSpinnerModule } from '../../shared/loading-spinner.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
     NewsComponent,
     NewsListComponent
  ],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    FormsModule,
    BrowserTransferStateModule,
    LoadingSpinnerModule,
    NgxPaginationModule
  ]
})
export class ReaderModule { }
