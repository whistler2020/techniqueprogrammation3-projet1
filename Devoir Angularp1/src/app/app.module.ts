import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniforfaitComponent } from './miniforfait/miniforfait.component';
import { ForfaitcompletComponent } from './forfaitcomplet/forfaitcomplet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulairegestionComponent } from './formulairegestion/formulairegestion.component';
import { FormulairesearcheComponent } from './formulairesearche/formulairesearche.component';
import { Miniforfait2Component } from './miniforfait2/miniforfait2.component';
import { Miniforfait3Component } from './miniforfait3/miniforfait3.component';
import { Miniforfait4Component } from './miniforfait4/miniforfait4.component';
import { Miniforfait5Component } from './miniforfait5/miniforfait5.component';
import { Miniforfait6Component } from './miniforfait6/miniforfait6.component';
import { BarreComponent } from './barre/barre.component';
import { Forfaitcomplet2Component } from './forfaitcomplet2/forfaitcomplet2.component';
import { Forfaitcomplet3Component } from './forfaitcomplet3/forfaitcomplet3.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniforfaitComponent,
    ForfaitcompletComponent,
    EtoilesComponent,
    FormulairegestionComponent,
    FormulairesearcheComponent,
    Miniforfait2Component,
    Miniforfait3Component,
    Miniforfait4Component,
    Miniforfait5Component,
    Miniforfait6Component,
    BarreComponent,
    Forfaitcomplet2Component,
    Forfaitcomplet3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
