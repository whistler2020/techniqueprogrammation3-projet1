import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-miniforfait5',
  templateUrl: './miniforfait5.component.html',
  styleUrls: ['./miniforfait5.component.css']
})
export class Miniforfait5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mini5 : Forfait = {
    destination:"Montreal",
    villeDepart:"New York",
    dateDepart :"10 decembre 2021",
    dateRetour:"....",
    prix:250,
    rabais:0,
    vedette:true,
    duree:10
  }

  hotel5 : Hotel= {
    nom:"Hotel de NY",
    coordonnees:"",
    nbEtoiles:"xxxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }

}
