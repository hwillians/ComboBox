import { Injectable } from '@angular/core';
import { Commune } from '../models/commune';
import { communes } from '../data/communes';
import { Departement } from '../models/departement';
import { Region } from '../models/region';
import { regions } from '../data/regions';
import { departements } from '../data/departements';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  insertRegions(): Region[] {
    return regions
  }
  
  insertDepartements(): Departement[] {
    return departements
  }

  insertCommunes(): Commune[] {
    return communes
  }
}
