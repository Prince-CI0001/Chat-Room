
import { RecieverComponent } from './reciever/reciever.component';
import { Component, ViewChild, ViewContainerRef, } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name : string='';
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  createComponent() {
    if(this.name){
    let comp = this.container.createComponent(RecieverComponent);
    comp.instance.userName = this.name;
    comp.instance.compoRef=comp;
    this.name="";
    }
  }
}
