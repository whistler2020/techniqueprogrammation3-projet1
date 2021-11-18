import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniforfaitComponent } from './miniforfait/miniforfait.component';
import { ForfaitcompletComponent } from './forfaitcomplet/forfaitcomplet.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulairegestionComponent } from './formulairegestion/formulairegestion.component';
import { FormulairesearcheComponent } from './formulairesearche/formulairesearche.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniforfaitComponent,
    ForfaitcompletComponent,
    EtoilesComponent,
    FormulairegestionComponent,
    FormulairesearcheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
