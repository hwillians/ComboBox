export interface TerritorialNode {
    name: string;
    commune?:string;
    department?:string;
    region?:string;
    children?: TerritorialNode[];
}
