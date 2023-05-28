import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill, 
  ApexTooltip,
  ApexGrid,
  ApexMarkers,
  ApexResponsive,
  ApexNonAxisChartSeries,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid
  responsive: ApexResponsive[];
};
export type ChartOptionsarea = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid
  markers: ApexMarkers
  responsive: ApexResponsive[];
};
declare const $: any;
declare var moment: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartOptionsarea: ChartOptionsarea = {
    series: [{
      name: "Doctors",
      data: [0, 1, 5, 3, 2]
    },
    {
      name: "Patients",
      data: [0, 3, 5, 2, 3]
    }
    ],
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 1,
      colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
    },
    markers: {
      size: 3,
      colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
    },
    fill: {
      colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    grid: {
      show: false,
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + "0";
        }
      },
      axisBorder: {
        show: true,
      },
    },
    xaxis: {
      categories: ['', '22/11/2021', '23/11/2021', '24/11/2021', '25/11/2021'],
    },
    responsive: []
  };
  public chartOptions:ChartOptions = {
    //provide all the keys here instead of assigning values in constructor
    series: [
      {
        name: "Gross revenue",
        type: "column",
        data: [15, 28, 5, 2, 32, 12, 30, 3, 2, 35, 15, 10]
      },
      {
        name: "Net revenue",
        type: "column",
        data: [10, 15, 2, 8, 20, 7, 15, 2, 3, 15, 8, 5]
      }
    ],
    chart: {
      type: 'bar',
      fontFamily: 'Poppins, sans-serif',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
      },
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + "0";
        }
      },
      axisBorder: {
        show: true,
      },
    },
    fill: {
      opacity: 1,
      colors: ['#0CE0FF', '#1B5A90', '#DFE5FC'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "0";
        }
      }
    },
    responsive: []
  }
  constructor() {}

  ngOnInit(): void {
    if($('.bookingrange').length > 0) {
      var start = moment().subtract(6, 'days');
      var end = moment();
  
      function booking_range(start: { format: (arg0: string) => string; }, end: { format: (arg0: string) => string; }) {
        $('.bookingrange span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
      }
  
      $('.bookingrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, booking_range);
  
      booking_range(start, end);
    }
  }
}
