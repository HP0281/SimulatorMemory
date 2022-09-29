import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponent } from './lista.component';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    ListaRoutingModule,
    MaterialModule
  ]
  , exports:[ListaComponent]
})
export class ListaModule { }
