export class Departement {
    name: string
    nbr: string
    region : string

    constructor( nbr: string, name: string,region : string) {
        this.name = name
        this.nbr = nbr
        this.region = region
    }
}
