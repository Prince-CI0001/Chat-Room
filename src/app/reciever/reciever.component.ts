import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { chatMessage } from '../chatMessage.service';
import { messageType } from './message.Interface';
@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css'],
})
export class RecieverComponent implements OnInit {
  @Input() userName: string = '';
  message: string = '';
  newMessage: string = '';
  sub!: Subscription;
  msgArray: messageType[] = [];
  isCancel: boolean = true;

  constructor(private _chatMessageReciever: chatMessage) {}

  ngOnInit(): void {
    this.sub = this._chatMessageReciever.message.subscribe((msg) =>
      this.createMessage(msg)
    );
    this.msgArray = JSON.parse(localStorage.getItem(this.userName) || "[]");
  }

  callForMessage(event: { key: string }) {
    if (event.key == 'Enter') this.sendmessage();
  }
  sendmessage(): void {
    if (this.newMessage) {
      let data: messageType = {
        Name: this.userName,
        Message: this.newMessage,
        currDate: new Date().toLocaleTimeString(),
      };
      this._chatMessageReciever.getMessage(data);
    }
  }

  //  userMsg = localStorage.getItem("userName");
  createMessage(msg: messageType) {
    // if (this.newMessage)
    this.msgArray.push(msg);
    this.newMessage = '';
  }

  deleteComponent() {
    this.sub.unsubscribe();
    this.isCancel = !this.isCancel;
    localStorage.setItem(this.userName, JSON.stringify(this.msgArray));
  }
}
