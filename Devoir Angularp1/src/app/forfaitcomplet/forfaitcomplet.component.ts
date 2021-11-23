import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Hotel } from '../hotel';
import { Etoile } from '../etoile';

@Component({
  selector: 'app-forfaitcomplet',
  templateUrl: './forfaitcomplet.component.html',
  styleUrls: ['./forfaitcomplet.component.css']
})
export class ForfaitcompletComponent implements OnInit {

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
    duree:10,
    description:'Nous vous offrons un service de qualité tout au long de votre voyage'
  }

  hotel1 : Hotel= {
    nom:"Hotel de Paris",
    coordonnees:"33 24 39 20 45",
    nbEtoiles:"xxxxx",
    nombreChambre:0,
    caracteristiques:['Face à la plage','Ascenseur','Miniclub'],
  }

}
