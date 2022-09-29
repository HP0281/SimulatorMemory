import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import {MatCardModule} from '@angular/material/card';
import {} from '@angular/material/button/button-module';
import { ConfigurationEnvironmentModule } from 'src/app/molecules/configuration-environment/configuration-environment.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
    ConfigurationEnvironmentModule
  ]
})
export class InicioModule { }
