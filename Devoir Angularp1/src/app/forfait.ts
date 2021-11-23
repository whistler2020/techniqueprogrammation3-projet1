export interface Forfait {
    destination:string,
    villeDepart:string,
    dateDepart:string,
    dateRetour:string,
    prix:number,
    rabais ?:number,
    vedette ?:true,
    duree ?:number,
    description ?:string
}
