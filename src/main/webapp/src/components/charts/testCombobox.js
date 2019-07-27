import React, { Component } from 'react';
import Highcharts from '../../../node_modules/highcharts/highstock';
import $ from 'jquery';
import axios from 'axios';
import * as CONSTANT from '../../constant/constants';


class TestCombobox extends Component {
    componentDidMount() {
        axios.get(CONSTANT.serviceUrl + "getAllTest")
            .then(result => {
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