import { NgModule } from '@angular/core';
import { PlayersComponent } from './players.component';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players.routing.module';
import { LoadingSpinnerModule } from '../../shared/loading-spinner.module';

@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    LoadingSpinnerModule
  ]
})
export class PlayersModule { }
