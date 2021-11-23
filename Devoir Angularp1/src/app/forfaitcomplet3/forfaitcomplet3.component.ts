import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-forfaitcomplet3',
  templateUrl: './forfaitcomplet3.component.html',
  styleUrls: ['./forfaitcomplet3.component.css']
})
export class Forfaitcomplet3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mini3 : Forfait = {
    destination:"Montreal",
    villeDepart:"Vancouver",
    dateDepart :"10 decembre 2021",
    dateRetour:"....",
    prix:250,
    rabais:0,
    vedette:true,
    duree:10,
    description:'Deux billets de voyages sont offerts pour les deux premiers gagnant de concour litteraire de la fin du mois de decembre 2021'
  }

  hotel3 : Hotel= {
    nom:"Hotel de Vancouver",
    coordonnees:"514 422 3545",
    nbEtoiles:"xxxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }



}
