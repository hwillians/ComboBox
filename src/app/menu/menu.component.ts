import { Component, OnInit } from '@angular/core';
import { Commune } from '../models/commune';
import { Departement } from '../models/departement';
import { Region } from '../models/region';
import { MenuService } from '../services/menu.service';
export class MatMenuListItem {
  menuLinkText: string | undefined;
  menuIcon: string | undefined;
  isDisabled: boolean | undefined;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  regions: Region[]
  departements: Departement[] = [];
  communes: Commune[] = [];


  menuListItems: MatMenuListItem[] | undefined;

  constructor(private menuService: MenuService) {
    this.regions = this.menuService.insertRegions()
  }

  loadDepartments(region: string) {
    this.departements = this.menuService.insertDepartements().filter(function (element) {
      return element.region == region;
    })
  }

  loadCommunes(dep: string) {
    this.communes = this.menuService.insertCommunes().filter(function (element) {
      return element.departement == dep;
    })
  }

  ngOnInit(): void {

  }

}
