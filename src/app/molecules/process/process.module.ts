import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProcessModule } from '../list-process/list-process.module';
import { ListMemoryModule } from '../list-memory/list-memory.module';
import { ListaModule } from '../lista/lista.module';


@NgModule({
  declarations: [
    ProcessComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ListProcessModule,
    ListMemoryModule,
    ListaModule
  ]
})
export class ProcessModule { }
