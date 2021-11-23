import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-miniforfait4',
  templateUrl: './miniforfait4.component.html',
  styleUrls: ['./miniforfait4.component.css']
})
export class Miniforfait4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mini4 : Forfait = {
    destination:"Quebec",
    villeDepart:"Montreal",
    dateDepart :"10 decembre 2021",
    dateRetour:"....",
    prix:250,
    rabais:0,
    vedette:true,
    duree:10
  }

  hotel4 : Hotel= {
    nom:"Hotel de Montreal",
    coordonnees:"",
    nbEtoiles:"xxxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }

}
