import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    var les_mois=['janvier','fevrier','mars']
    var les_jours=[31,28,31]
    var nombre_d = [4,3,4]
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: les_mois,

	       datasets: [
          {
            label: "N_jours",
            data: les_jours,
            backgroundColor: 'blue'
          },
          {
            label: "monbre de dimanche",
            data: nombre_d,
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
