import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-miniforfait6',
  templateUrl: './miniforfait6.component.html',
  styleUrls: ['./miniforfait6.component.css']
})
export class Miniforfait6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mini6 : Forfait = {
    destination:"Montreal",
    villeDepart:"Berlin",
    dateDepart :"10 decembre 2021",
    dateRetour:"....",
    prix:250,
    rabais:0,
    vedette:true,
    duree:10
  }

  hotel6 : Hotel= {
    nom:"Hotel de Berlin",
    coordonnees:"",
    nbEtoiles:"xxxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }

}
