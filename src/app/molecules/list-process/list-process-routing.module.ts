import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProcessComponent } from './list-process.component';

const routes: Routes = [{path: '', component: ListProcessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProcessRoutingModule { }
