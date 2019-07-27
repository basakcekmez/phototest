import React, { Component } from 'react';
import Highcharts from '../../node_modules/highcharts/highstock';

class MyChart extends Component {
    componentDidMount() {
        var chart = Highcharts.chart('chart', {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var seriesDownload = this.series[0];
                        var i = 0;

                        setInterval(function () {
                            var shift = seriesDownload.data.length > 5;
                            seriesDownload.addPoint(
                                {
                                    x: new Date(),
                                    y: Math.floor(Math.random() * 10)
                                }, true, shift);

                        }, 2000);
                    }
                }
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Port Performance'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [
                    {
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }
                ]
            },
            tooltip: {
                formatter: function () {
                    return (
                        '<b>' +
                        this.series.name +
                        '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
                        '<br/>' +
                        Highcharts.numberFormat(this.y, 0) +
                        ' KB/s'
                    );
                }
            },
            legend: {
                enabled: true
            },
            exporting: {
                enabled: false
            },
            series: [
                {
                    name: 'Task Count',
                    color: '#ff0000',
                    data: [{
                        x: new Date(),
                        y: 5
                    }]
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <div id="chart"/>
            </div>
        );
    }
}

export default MyChart;