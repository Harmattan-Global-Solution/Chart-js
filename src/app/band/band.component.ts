import { Component } from '@angular/core';
// import Chart from 'chart.js/auto';
import { Chart, ChartConfiguration, ChartData, ChartDataset } from 'chart.js';


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent {

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    var année =[2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
    var Somme= [40500,20040,40300,66366,77777,44344,100030,50300,54336,53379,77463]
    const colors = ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)']; // Tableau de couleurs

  //   new Chart("acquisitions",
  //     {
  //       type: 'bar',
  //       data: {
  //         labels: année,
  //         datasets: [
  //           {
  //             label: 'Somme collecté par année',
  //             data: Somme
  //           }
  //         ]
  //       },
       
  //     }
      
  //   );
  const chartOptions: ChartConfiguration<'bar', number[]> = {
    type: 'bar',
    data: {
      labels: année,
      datasets: [
        {
          label: 'Somme collectée par année',
          data: Somme,
          backgroundColor: colors, // Porsonaliser les couleur ici
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Collecte Par Année', // Porsonaliser le tittre ici
          position:'top'
        
        },
        legend:{
          display:true,
          position:'bottom', // Porsonaliser la legend ici
          
        }
      }
    },
  
  };

  new Chart("acquisitions", chartOptions);
}
  }
    
  




