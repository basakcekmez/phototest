import React, { Component } from 'react';
import Highcharts from '../../../node_modules/highcharts/highstock';
import $ from 'jquery';
import axios from 'axios';
import * as CONSTANT from '../../constant/constants';


class TaskCount extends Component {
    componentDidMount() {
        var chart = Highcharts.stockChart('TaskCount', {
            chart: {
                events: {
                    load: function () {
                        var id = 0;
                        // set up the updating of the chart each second
                        var seriesForRecieved = this.series[0];
                        var seriesForSent = this.series[1];
                        setInterval(function () {
                            axios.get(CONSTANT.serviceUrl + "getLatestOCSfrs?id=" + id)
                                .then(result => {

                                    for (var i = 0; i < result.data.length; i++) {
                                        var ocsFligtRecord = result.data[i];
                                        var x = ocsFligtRecord.date; // current time
                                        id = ocsFligtRecord.id;
                                        seriesForRecieved.addPoint([x, ocsFligtRecord.recievedTaskCount], false, seriesForRecieved.data.length > CONSTANT.secondsToHoldPoints);
                                        seriesForSent.addPoint([x, ocsFligtRecord.sentTaskCount], false, seriesForSent.data.length >  CONSTANT.secondsToHoldPoints);
                                    }
                                    chart.redraw();
                                });
                        }, 5000);
                    }
                }
            },
            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 5,
                    type: 'minute',
                    text: '5M'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },

            title: {
                text: 'Live Task Count'
            },

            legend: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },

            series: [{
                name: 'Recieved Task Count',
                data: []
            },{
                name: 'Sent Task Count',
                data: []
            }]
        });
    }

    render() {
        return (
            <div>
                <div id="TaskCount"/>
            </div>
        );
    }
}
TaskCount.map = new Map();
export default TaskCount;