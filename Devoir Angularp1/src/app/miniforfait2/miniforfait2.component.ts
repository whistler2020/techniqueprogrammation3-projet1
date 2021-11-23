import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-miniforfait2',
  templateUrl: './miniforfait2.component.html',
  styleUrls: ['./miniforfait2.component.css']
})
export class Miniforfait2Component implements OnInit {

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
    duree:10
  }

  hotel2 : Hotel= {
    nom:"Hotel de Toronto",
    coordonnees:"",
    nbEtoiles:'xxxxxx',
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }

}
