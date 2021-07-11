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

    // Inisitalise l'arbre evec entrée pays
    let franceTree: TerritorialNode[] = [{ name: 'France' }]
    // un premier niveau avec les regions
    let regionsTree: TerritorialNode[] = []
    regions.forEach(region => {
      regionsTree.push({ name: region.name })
    });

    regionsTree.forEach(node => {
      let departmentsTree: TerritorialNode[] = []
      departements.filter(function (element) {
        return element.region == node.name;
      }).forEach(region => {
        departmentsTree.push({ name: region.name })
      });

      departmentsTree.forEach(node => {
        let communesTree: TerritorialNode[] = []
        communes.filter(function (element) {
          return element.departement == node.name;
        }).forEach(departement => {
          communesTree.push({ name: departement.name })
        });
        node.children = communesTree;
      });

      node.children = departmentsTree;
    });

    franceTree[0].children = regionsTree
    return franceTree
  }
}



