import React, { Component } from 'react';
import Highcharts from '../../../node_modules/highcharts/highstock';
import $ from 'jquery';
import axios from 'axios';
import * as CONSTANT from '../../constant/constants';


class TestCombobox extends Component {
    componentDidMount() {
        axios.get(CONSTANT.serviceUrl + "getAllTest")
            .then(result => {
                for (var i = 0; i < result.data.length; i++) {
                    var testCase = result.data[i];
                    console.log(testCase.testName);
                }

            });
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default TestCombobox;