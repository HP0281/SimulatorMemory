import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';

const routes: Routes = [{path:'', component: InicioComponent},
{
  path:'createProcess', loadChildren: () => import('../../molecules/process/process.module').then((m) => m.ProcessModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
