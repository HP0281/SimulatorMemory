import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListMemoryRoutingModule } from './list-memory-routing.module';
import { ListMemoryComponent } from './list-memory.component';


@NgModule({
  declarations: [ListMemoryComponent],
  imports: [
    CommonModule,
    ListMemoryRoutingModule
  ],
  exports: [ListMemoryComponent]
})
export class ListMemoryModule { }
