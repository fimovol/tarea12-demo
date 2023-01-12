export enum Listado {
    pordefecto = 1,
    USD,
    EUR 
}

export interface Regestrarse{
    pais: Listado;
    valor: number;
}