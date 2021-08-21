import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertDemoRoutingModule } from './alert-demo-routing.module';
import { AlertDemoComponent } from './alert-demo.component';
import { AlertModule } from 'projects/components/src/public-api';
import { AlertConfiguration } from 'projects/components/src/lib/alert/alert-configuration.service';


@NgModule({
  declarations: [
    AlertDemoComponent
  ],
  imports: [
    CommonModule,
    AlertDemoRoutingModule,
    AlertModule,
  ],
  providers: [{
    provide: AlertConfiguration,
    useValue: {type: 'danger', dismissable: true}
  }]
})
export class AlertDemoModule { }
