import { Injectable } from "@angular/core";
import {Subject} from "rxjs"
import { messageType } from "./reciever/message.Interface";


@Injectable({
  providedIn: 'root'
 })
  export class chatMessage{
  private chat = new Subject<messageType>();
  message= this.chat.asObservable();
  getMessage(msg:messageType)
  {
    this.chat.next(msg);
  }
}
