import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts'; 
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexLegend
} from 'ng-apexcharts';

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  colors: string[];
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './donut-chart.component.html',
})
export class DonutChartComponent {
  public chartOptions: DonutChartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      height: 240
    },
    colors: ['#00B8D9', '#066AC9', '#FFAB00', '#F37639', '#8E33FF'],
    legend: {
      show: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
}
