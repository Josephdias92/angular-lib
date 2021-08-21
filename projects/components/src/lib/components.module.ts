import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { AlertModule } from './alert/alert.module';


@NgModule({
  declarations: [
    ComponentsComponent,
  ],
  imports: [
  
    AlertModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
