import React, { Component } from 'react';
import Highcharts from '../../../node_modules/highcharts/highstock';
import $ from 'jquery';
import axios from 'axios';
import * as CONSTANT from '../../constant/constants';



class SuccessCount extends Component {
    componentDidMount() {
        var chart = Highcharts.stockChart('SuccessCount', {
            chart: {
                events: {
                    load: function () {
                        var id = 0;
                        // set up the updating of the chart each second
                        var seriesForRejected = this.series[0];
                        var seriesForSuccess = this.series[1];
                        setInterval(function () {
                            axios.get(CONSTANT.serviceUrl + "getLatestOCSfrs?id=" + id)
                                .then(result => {

                                    for (var i = 0; i < result.data.length; i++) {
                                        var ocsFligtRecord = result.data[i];
                                        var x = ocsFligtRecord.date; // current time
                                        id = ocsFligtRecord.id;
                                        seriesForRejected.addPoint([x, ocsFligtRecord.rejectedTaskCount], false, seriesForRejected.data.length > CONSTANT.secondsToHoldPoints);
                                        seriesForSuccess.addPoint([x, ocsFligtRecord.successedTaskCount], false, seriesForSuccess.data.length >  CONSTANT.secondsToHoldPoints);
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
                text: 'Live Success/Rejected Count'
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Rejected Count',
                data: []
            },{
                name: 'Success Count',
                data: []
            }]
        });
    }

    render() {
        return (
            <div>
                <div id="SuccessCount"/>
            </div>
        );
    }
}
export default SuccessCount;