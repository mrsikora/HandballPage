import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';



const managementRouting: Routes = [
  {
  path: '',
  component: ManagementComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(managementRouting)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
