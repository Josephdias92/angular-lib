import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertDemoRoutingModule } from './alert-demo-routing.module';
import { AlertDemoComponent } from './alert-demo.component';
import { AlertModule } from 'projects/components/src/public-api';


@NgModule({
  declarations: [
    AlertDemoComponent
  ],
  imports: [
    CommonModule,
    AlertDemoRoutingModule,
    AlertModule
  ]
})
export class AlertDemoModule { }
