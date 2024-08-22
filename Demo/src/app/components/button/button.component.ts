import {Component, Input} from '@angular/core';
import {CommunicationService} from "../../services/communications.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  constructor(protected communicationService: CommunicationService) { }
  @Input() pressJoin: number = 0;
  @Input() feedbackJoin: number = 0;
}
