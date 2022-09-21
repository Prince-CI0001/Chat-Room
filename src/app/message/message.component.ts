import { Component, OnInit } from '@angular/core';
import { RecieverComponent } from '../reciever/reciever.component';
import { chatMessage } from '../chatMessage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{
name:string="";
message:string="";
currdate:string="";
sides : boolean = false;
}
