import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';



const formRouting: Routes = [
  {
  path: '',
  component: FormComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(formRouting)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
