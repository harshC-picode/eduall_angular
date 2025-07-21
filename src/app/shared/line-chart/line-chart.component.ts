import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts'; 
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels,
  ApexMarkers,
  ApexGrid,
  ApexLegend,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  grid: ApexGrid;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent {
  public chartOptions: LineChartOptions = {
    series: [
      { data: [38, 39, 19, 19.5, 19, 35, 34, 27, 27, 8, 8, 25] },
      { data: [18, 18, 31, 32, 8, 8, 30, 30, 20, 20, 40, 40] }
    ],
    chart: {
      height: 350,
      type: 'line',
      dropShadow: { enabled: false },
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    colors: ['#066AC9', '#F37639'],
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    },
    markers: { size: 1 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Jul', 'Aug', 'Aug']
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
      show: false
    }
  };
}
