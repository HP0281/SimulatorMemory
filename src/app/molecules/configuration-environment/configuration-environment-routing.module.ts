import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationEnvironmentComponent } from './configuration-environment.component';

const routes: Routes = [{
  path:'', component: ConfigurationEnvironmentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationEnvironmentRoutingModule { }
