import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TerritorialNode } from '../models/territorial-node';
import { TreeService } from '../services/tree.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Output()
  nodeEvent = new EventEmitter<TerritorialNode>();

  treeControl = new NestedTreeControl<TerritorialNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TerritorialNode>();

  node: TerritorialNode = { name: "" };

  constructor(private serv: TreeService) {
    this.dataSource.data = this.serv.loadTerritorialNode()
  }

  pushPath(node: TerritorialNode) {
    this.nodeEvent.emit(node)
  }

  hasChild = (_: number, node: TerritorialNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void { }
}
