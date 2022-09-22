import { Component, OnInit, Input } from '@angular/core';
import { messageType } from '../reciever/message.Interface';

@Component({
  selector: 'app-message[msgTemplate]',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() username!: string;
  @Input() msgTemplate!: messageType;
  sides!: boolean;
  ngOnInit() {
    this.sides = (this.msgTemplate.Name === this.username);
  }
}
