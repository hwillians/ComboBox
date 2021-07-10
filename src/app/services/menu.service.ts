import { Injectable } from '@angular/core';
import { Commune } from '../models/commune';
import { communes } from '../models/communes';
import { Departement } from '../models/departement';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  

  constructor() { }
  regions: Region[] = [
    new Region(84, "Auvergne-Rhône-Alpes"),
    new Region(27, "Bourgogne-Franche-Comté"),
    new Region(53, "Bretagne"),
    new Region(24, "Centre-Val de Loire"),
    new Region(94, "Corse"),
    new Region(44, "Grand Est"),
    new Region(32, "Hauts-de-France"),
    new Region(11, "Île-de-France"),
    new Region(28, "Normandie"),
    new Region(75, "Nouvelle-Aquitaine"),
    new Region(76, "Occitanie"),
    new Region(52, "Pays de la Loire"),
    new Region(93, "Provence-Alpes-Côte d'Azur"),
  ]

  departements: Departement[] = [
    new Departement("1", "Ain", "Auvergne-Rhône-Alpes"),
    new Departement("2", "Aisne", "Hauts-de-France"),
    new Departement("3", "Allier", "Auvergne-Rhône-Alpes"),
    new Departement("4", "Alpes-de-Haute-Provence", "Provence-Alpes-Côte d'Azur"),
    new Departement("5", "Hautes-Alpes", "Provence-Alpes-Côte d'Azur"),
    new Departement("6", "Alpes-Maritimes", "Provence-Alpes-Côte d'Azur"),
    new Departement("7", "Ardèche", "Auvergne-Rhône-Alpes"),
    new Departement("8", "Ardennes", "Grand Est"),
    new Departement("9", "Ariège", "Occitanie"),
    new Departement("10", "Aube", "Grand Est"),
    new Departement("11", "Aude", "Occitanie"),
    new Departement("12", "Aveyron", "Occitanie"),
    new Departement("13", "Bouches-du-Rhône", "Provence-Alpes-Côte d'Azur"),
    new Departement("14", "Calvados", "Normandie"),
    new Departement("15", "Cantal", "Auvergne-Rhône-Alpes"),
    new Departement("16", "Charente", "Nouvelle-Aquitaine"),
    new Departement("17", "Charente-Maritime", "Nouvelle-Aquitaine"),
    new Departement("18", "Cher", "Centre-Val de Loire"),
    new Departement("19", "Corrèze", "Nouvelle-Aquitaine"),
    new Departement("2A", "Corse-du-Sud", "Corse"),
    new Departement("2B", "Haute-Corse", "Corse"),
    new Departement("21", "Côte-d'Or", "Bourgogne-Franche-Comté"),
    new Departement("22", "Côtes d'Armor", "Bretagne"),
    new Departement("23", "Creuse", "Nouvelle-Aquitaine"),
    new Departement("24", "Dordogne", "Nouvelle-Aquitaine"),
    new Departement("25", "Doubs", "Bourgogne-Franche-Comté"),
    new Departement("26", "Drôme", "Auvergne-Rhône-Alpes"),
    new Departement("27", "Eure", "Normandie"),
    new Departement("28", "Eure-et-Loir", "Centre-Val de Loire"),
    new Departement("29", "Finistère", "Bretagne"),
    new Departement("30", "Gard", "Occitanie"),
    new Departement("31", "Haute-Garonne", "Occitanie"),
    new Departement("32", "Gers", "Occitanie"),
    new Departement("33", "Gironde", "Nouvelle-Aquitaine"),
    new Departement("34", "Hérault", "Occitanie"),
    new Departement("35", "Ille-et-Vilaine", "Bretagne"),
    new Departement("36", "Indre", "Centre-Val de Loire"),
    new Departement("37", "Indre-et-Loire", "Centre-Val de Loire"),
    new Departement("38", "Isère", "Auvergne-Rhône-Alpes"),
    new Departement("39", "Jura", "Bourgogne-Franche-Comté"),
    new Departement("40", "Landes", "Nouvelle-Aquitaine"),
    new Departement("41", "Loir-et-Cher", "Centre-Val de Loire"),
    new Departement("42", "Loire", "Auvergne-Rhône-Alpes"),
    new Departement("43", "Haute-Loire", "Auvergne-Rhône-Alpes"),
    new Departement("44", "Loire-Atlantique", "Pays de la Loire"),
    new Departement("45", "Loiret", "Centre-Val de Loire"),
    new Departement("46", "Lot", "Occitanie"),
    new Departement("47", "Lot-et-Garonne", "Nouvelle-Aquitaine"),
    new Departement("48", "Lozère", "Occitanie"),
    new Departement("49", "Maine-et-Loire", "Pays de la Loire"),
    new Departement("50", "Manche", "Normandie"),
    new Departement("51", "Marne", "Grand Est"),
    new Departement("52", "Haute-Marne", "Grand Est"),
    new Departement("53", "Mayenne", "Pays de la Loire"),
    new Departement("54", "Meurthe-et-Moselle", "Grand Est"),
    new Departement("55", "Meuse", "Grand Est"),
    new Departement("56", "Morbihan", "Bretagne"),
    new Departement("57", "Moselle", "Grand Est"),
    new Departement("58", "Nièvre", "Bourgogne-Franche-Comté"),
    new Departement("59", "Nord", "Hauts-de-France"),
    new Departement("60", "Oise", "Hauts-de-France"),
    new Departement("61", "Orne", "Normandie"),
    new Departement("62", "Pas-de-Calais", "Hauts-de-France"),
    new Departement("63", "Puy-de-Dôme", "Auvergne-Rhône-Alpes"),
    new Departement("64", "Pyrénées-Atlantiques", "Nouvelle-Aquitaine"),
    new Departement("65", "Hautes-Pyrénées", "Occitanie"),
    new Departement("66", "Pyrénées-Orientales", "Occitanie"),
    new Departement("67", "Bas-Rhin", "Grand Est"),
    new Departement("68", "Haut-Rhin", "Grand Est"),
    new Departement("69", "Rhône", "Auvergne-Rhône-Alpes"),
    new Departement("70", "Haute-Saône", "Bourgogne-Franche-Comté"),
    new Departement("71", "Saône-et-Loire", "Bourgogne-Franche-Comté"),
    new Departement("72", "Sarthe", "Pays de la Loire"),
    new Departement("73", "Savoie", "Auvergne-Rhône-Alpes"),
    new Departement("74", "Haute-Savoie", "Auvergne-Rhône-Alpes"),
    new Departement("75", "Paris", "Île-de-France"),
    new Departement("76", "Seine-Maritime", "Normandie"),
    new Departement("77", "Seine-et-Marne", "Île-de-France"),
    new Departement("78", "Yvelines", "Île-de-France"),
    new Departement("79", "Deux-Sèvres", "Nouvelle-Aquitaine"),
    new Departement("80", "Somme", "Hauts-de-France"),
    new Departement("81", "Tarn", "Occitanie"),
    new Departement("82", "Tarn-et-Garonne", "Occitanie"),
    new Departement("83", "Var", "Provence-Alpes-Côte d'Azur"),
    new Departement("84", "Vaucluse", "Provence-Alpes-Côte d'Azur"),
    new Departement("85", "Vandée", "Pays de la Loire"),
    new Departement("86", "Vienne", "Nouvelle-Aquitaine"),
    new Departement("87", "Haute-Vienne", "Nouvelle-Aquitaine"),
    new Departement("88", "Vosges", "Grand Est"),
    new Departement("89", "Yonne", "Bourgogne-Franche-Comté"),
    new Departement("90", "Territoire de Belfort", "Bourgogne-Franche-Comté"),
    new Departement("91", "Essonne", "Île-de-France"),
    new Departement("92", "Hauts-de-Seine", "Île-de-France"),
    new Departement("93", "Seine-St-Denis", "Île-de-France"),
    new Departement("94", "Val-de-Marne", "Île-de-France"),
    new Departement("95", "Val-D'Oise", "Île-de-France"),
    new Departement("971", "Guadeloupe", "Guadeloupe"),
    new Departement("972", "Martinique", "Martinique"),
    new Departement("973", "Guyane", "Guyane"),
    new Departement("974", "La Réunion", "La Réunion"),
    new Departement("976", "Mayotte", "Mayotte"),
  ]

  insertRegions(): Region[] {

    return this.regions
  }
  insertDepartements(): Departement[] {

    return this.departements
  }
  insertCommunes() : Commune[] {
        return communes

  }
}
