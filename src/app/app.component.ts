import { RecieverComponent } from './reciever/reciever.component';
import { Component, ViewChild, ViewContainerRef, Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name : string='';
  Array:string[] =[];
  msg(event: {key:string}){
    if(event.key=="Enter")
    this.createComponent();
  }
  createComponent(){

    let value = (<HTMLInputElement>document.getElementById("user")).value;
    if(value=="")
    alert("Enter user");
    
    else
    this.Array.push(value);
    this.name="";

  }
  }
