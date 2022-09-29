import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationEnvironmentRoutingModule } from './configuration-environment-routing.module';
import { ConfigurationEnvironmentComponent } from './configuration-environment.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ConfigurationEnvironmentComponent],
  imports: [
    ConfigurationEnvironmentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports:[ConfigurationEnvironmentComponent]
})
export class ConfigurationEnvironmentModule { }
