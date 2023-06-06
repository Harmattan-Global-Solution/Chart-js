import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CarteComponent } from './carte/carte.component';
import { BandComponent } from './band/band.component';

const routes: Routes = [
{path:'lign',component: LineChartComponent},
{path:'bar',component:BarChartComponent},
{path:'carte', component:CarteComponent},
{path:'band',component:BandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
