import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProcessRoutingModule } from './list-process-routing.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { ListProcessComponent } from './list-process.component';


@NgModule({
  declarations: [ListProcessComponent],
  imports: [
    CommonModule,
    ListProcessRoutingModule,
    MaterialModule
  ],
  exports: [ListProcessComponent]
})
export class ListProcessModule { }
