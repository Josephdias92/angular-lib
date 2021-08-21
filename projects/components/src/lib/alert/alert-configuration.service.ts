import { Injectable } from "@angular/core";
import { AlertType } from "./alert-type.enum";

@Injectable({
    providedIn: 'root'
})
export class AlertConfiguration {
    type: AlertType = AlertType.WARNING;
    dismissable = false;
}