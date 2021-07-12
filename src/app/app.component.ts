import { Component } from '@angular/core';
import { TerritorialNode } from './models/territorial-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComboBox';

  chemin: string = ""

  receiveMessage(node: TerritorialNode) {
    let region = node.region ? ('/' + node.region) : " "
    let dep = node.department ? ('/' + node.department) : " "
    let commune = node.commune ? ('/' + node.commune) : " "
    this.chemin = region + dep + commune
  }
}
