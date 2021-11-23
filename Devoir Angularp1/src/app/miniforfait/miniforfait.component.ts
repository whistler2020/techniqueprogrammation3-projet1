import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-miniforfait',
  templateUrl: './miniforfait.component.html',
  styleUrls: ['./miniforfait.component.css']
})
export class MiniforfaitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mini1 : Forfait = {
    destination:"Paris",
    villeDepart:"Montreal",
    dateDepart :"25 novembre 2021",
    dateRetour:"....",
    prix:250,
    rabais:0,
    vedette:true,
    duree:10
  }

  hotel1 : Hotel= {
    nom:"Hotel de Paris",
    coordonnees:"",
    nbEtoiles:"xxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }
}
