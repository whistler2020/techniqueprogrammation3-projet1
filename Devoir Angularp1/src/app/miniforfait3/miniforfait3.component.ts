import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-miniforfait3',
  templateUrl: './miniforfait3.component.html',
  styleUrls: ['./miniforfait3.component.css']
})
export class Miniforfait3Component implements OnInit {

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
    duree:10
  }

  hotel3 : Hotel= {
    nom:"Hotel de Vancouver",
    coordonnees:"",
    nbEtoiles:"xxxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }

}
