import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';



const contactRouting: Routes = [
  {
  path: '',
  component: ContactComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(contactRouting)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
