import { Injectable } from '@angular/core';
import { communes } from '../data/communes';
import { departements } from '../data/departements';
import { regions } from '../data/regions';
import { TerritorialNode } from '../models/territorial-node';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  loadTerritorialNode(): TerritorialNode[] {

    let regionsTree: TerritorialNode[] = []
    // load regions
    regions.forEach(region => {
      regionsTree.push({ name: region.name, region: region.name })
    });

    // find departements by region
    regionsTree.forEach(node => {
      let departmentsTree: TerritorialNode[] = []
      departements.filter(function (element) {
        return element.region == node.name;
      }).forEach(department => {
        departmentsTree.push({ name: department.name, department: department.name, region: department.region })
      });

      //find communes by departement
      departmentsTree.forEach(node => {
        let communesTree: TerritorialNode[] = []
        communes.filter(function (element) {
          return element.departement == node.name;
        }).forEach(commune => {
          communesTree.push({ name: commune.name, commune: commune.name, department: commune.departement, region: commune.region })
        });

        // load communes to departement
        node.children = communesTree;
      });

      // load departement to region
      node.children = departmentsTree;
    });

    return regionsTree
  }
}



