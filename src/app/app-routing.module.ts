import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component: AppComponent, children: [
    {
      path:'', loadChildren: () => import('./pages/inicio/inicio.module').then((m) => m.InicioModule)
    }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
