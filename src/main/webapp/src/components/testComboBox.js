import React, {Component} from 'react';
import faker from "faker";
import * as CONSTANT from '../constant/constants';
import axios from 'axios';
import AsyncSelect from 'react-select/async';

const colourOptions = [{
    label: "red", value: "red"
}]

const filterOptions = (inputValue: string, options: any) => {
    return options.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

class TestComboBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    handleChange = (newValue: string) => {
        if (this.state.data.testResults) {
            var testResult = JSON.parse(newValue.value.testResult);
            for (var j = 0; j < this.state.data.callBacks.length; j++) {
                this.state.data.callBacks[j](testResult);
            }
        }
    };

    loadOptions = (inputValue, callback) => {

        axios.get(CONSTANT.serviceUrl + "getAllTest")
            .then(result => {
                console.log("getAllTest result came");
                var options = new Array(result.data.length);
                this.state.data.testResults = [];
                for (var i = 0; i < result.data.length; i++) {
                    var testCase = result.data[i];
                    options[i] = {label: testCase.testName, value: result.data[i]};
                }
                callback(filterOptions(inputValue, options));
            });
    };

    render() {
        return (
            <div>
                <AsyncSelect
                    cacheOptions
                    loadOptions={this.loadOptions}
                    onChange={this.handleChange}
                    defaultOptions
                />
            </div>

        );
    }
}

export default TestComboBox;