import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrapheComponent } from './graphe/graphe.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LigneChartComponent } from './ligne-chart/ligne-chart.component';
import { CarteComponent } from './carte/carte.component';
import { BandComponent } from './band/band.component';






@NgModule({
  declarations: [
    AppComponent,
    GrapheComponent,
    BarChartComponent,
    LineChartComponent,
    LigneChartComponent,
    CarteComponent,
    BandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
