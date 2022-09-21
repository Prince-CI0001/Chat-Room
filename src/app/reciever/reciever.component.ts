import {
  Component,
  ComponentRef,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { chatMessage } from '../chatMessage.service';
import { MessageComponent } from '../message/message.component';
import { messageType } from './message.Interface';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css'],
})


export class RecieverComponent implements OnInit {
  public userName: string = '';
  message: string = '';
  newMessage: string = '';
  sub! : Subscription;
  compoRef! : ComponentRef<RecieverComponent>
  constructor(private _chatMessageReciever: chatMessage) {}
  ngOnInit(): void {
    this.sub = this._chatMessageReciever.message.subscribe(msg => this.createMessage(msg));
  }
  sendmessage(): void {
    let data:messageType ={
      Name: this.userName,
      Message: this.newMessage,
      currDate : new Date().toLocaleTimeString()
    }

    this._chatMessageReciever.getMessage(data);
  }


  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
 createMessage(msg:messageType){
  let message = this.container.createComponent(MessageComponent);
  message.instance.name=msg.Name;
  message.instance.message=msg.Message;
  message.instance.currdate=msg.currDate;
  message.instance.sides = (msg.Name===this.userName);
  this.newMessage="";
 }
 deleteComponent()
 {
  this.sub.unsubscribe();
  this.compoRef.destroy();
 }

}
