import { Injectable } from '@angular/core';
import { communes } from '../data/communes';
import { departements } from '../data/departements';
import { regions } from '../data/regions';
import { Departement } from '../models/departement';
import { TerritorialNode } from '../models/territorial-node';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  loadTerritorialNode(): TerritorialNode[] {

    const _pays = 'France';
    // Inisitalise l'arbre evec entrée pays
    let franceTree: TerritorialNode[] = [{ name: _pays }]
    // un premier niveau avec les regions
    let regionsTree: TerritorialNode[] = []
    regions.forEach(region => {
      regionsTree.push({ name: region.name, region: region.name })
    });

    regionsTree.forEach(node => {
      let departmentsTree: TerritorialNode[] = []
      departements.filter(function (element) {
        return element.region == node.name;
      }).forEach(department => {
        departmentsTree.push({ name: department.name, department: department.name, region: department.region })
      });

      departmentsTree.forEach(node => {
        let communesTree: TerritorialNode[] = []
        communes.filter(function (element) {
          return element.departement == node.name;
        }).forEach(commune => {
          communesTree.push({ name: commune.name, commune: commune.name, department: commune.departement, region: commune.region })
        });
        node.children = communesTree;
      });

      node.children = departmentsTree;
    });

    franceTree[0].children = regionsTree
    return franceTree
  }
}



