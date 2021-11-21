export interface Forfait {
    destination:string,
    villeDepart:string,
    hotel:{
        nom:string,
        coordonnees:string,
        nombreEtoiles:6,
        nombreChambre:number,
        caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
    },
    dateDepart:'',
    dateRetour:'',
    prix:number,
    rabais:number,
    vedette:true
}
