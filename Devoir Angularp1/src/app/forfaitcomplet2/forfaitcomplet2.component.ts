import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-forfaitcomplet2',
  templateUrl: './forfaitcomplet2.component.html',
  styleUrls: ['./forfaitcomplet2.component.css']
})
export class Forfaitcomplet2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mini2 : Forfait = {
    destination:"Toronto",
    villeDepart:"Montreal",
    dateDepart :"25 novembre 2021",
    dateRetour:"....",
    prix:250,
    rabais:0,
    vedette:true,
    duree:10,
    description:'Un forfait rabais est offert à toute personne qui achete au moins trois bllets'
  }

  hotel2 : Hotel= {
    nom:"Hotel de Toronto",
    coordonnees:"514 439-9990",
    nbEtoiles:"xxxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }


}
