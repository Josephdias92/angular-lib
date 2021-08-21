import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AlertConfiguration } from './alert-configuration.service';
import { AlertType } from './alert-type.enum';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent {

  constructor(alertConfiguration: AlertConfiguration) {
    this.dismissable = alertConfiguration.dismissable;
    this.type = alertConfiguration.type;
  }

  @Input()
  type: AlertType| string;

  @Input()
  dismissable: boolean;

  @Output()
  closed = new EventEmitter();

  close = false ;

  dismiss(alert: AlertComponent) {
    this.close = true;
    this.closed.emit(alert);
  }

}
