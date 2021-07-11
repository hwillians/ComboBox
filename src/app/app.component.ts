import { Component, EventEmitter, Output } from '@angular/core';
import { TerritorialNode } from './models/territorial-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComboBox';
  node!: TerritorialNode ;

  receiveMessage(node: TerritorialNode) {
    this.node = node
  }
}
