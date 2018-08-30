import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';


const playersRouting: Routes = [
  {
  path: '',
  component: PlayersComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(playersRouting)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
