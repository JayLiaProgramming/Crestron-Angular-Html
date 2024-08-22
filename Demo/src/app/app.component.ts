import { Component } from '@angular/core';
import {CommunicationService} from "./services/communications.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(protected communicationService: CommunicationService) {
  }
  protected readonly buttonCount: number[] = Array.from({length: 10}, (_, i) => i);
  protected readonly indexedDB = indexedDB;
}
