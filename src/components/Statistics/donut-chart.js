var dividend = (window.screen.availWidth / 320).toFixed(0)
var offset = ( dividend * dividend ) + 30

const ReactHighcharts = require('react-highcharts'); 
// Build the chart
ReactHighcharts.chart('donutChartContainer', {
    exporting: {enabled: false},
    chart: {
        renderTo: 'container',
        type: 'pie'
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        useHTML: true,
        y: -10,
        text: '<div class="donut-chart-heading"><div><h2>$20.3m</h2><div>Hardcap</div></div>'
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
        pie: {
            shadow: false
        }
    },
    tooltip: { 
        formatter: function () {
            return '<b>' + this.point.name + '</b>: $' + this.y + 'm';
        }
    },
    series: [{
        name: 'Browsers',
        data: [{name: "Tokenmarket Sale", y: 11.3, color: '#134864'}, {name: "Private Sale", y: 6, color: '#45A588'}, {
            name: "Ethfinex Sale",
            y: 3,
            color: '#3498DB'
        }],
        size: '80%',
        innerSize: '92%',
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});