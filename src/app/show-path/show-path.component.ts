import { Component, Input, OnInit } from '@angular/core';
import { TerritorialNode } from '../models/territorial-node';

@Component({
  selector: 'app-show-path',
  templateUrl: './show-path.component.html',
  styleUrls: ['./show-path.component.css']
})
export class ShowPathComponent implements OnInit {

  constructor() { }
  
  @Input()
  node!: TerritorialNode ;

  ngOnInit(): void {
  }

}
