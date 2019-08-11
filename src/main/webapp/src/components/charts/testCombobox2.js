import React, {Component} from 'react';
import faker from "faker";
import * as CONSTANT from '../../constant/constants';
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

const loadOptions = (inputValue, callback) => {

    axios.get(CONSTANT.serviceUrl + "getAllTest")
        .then(result => {
            var options = new Array(result.data.length);
            for (var i = 0; i < result.data.length; i++) {
                var testCase = result.data[i];
                options[i] = {label: testCase.testName, value: i + 1};
            }
            callback(filterOptions(inputValue, options));
        });
};

class TestComboBox2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: null
        };
    }

    render() {
        return (
            <div>
                <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                />
            </div>

        );
    }
}

export default TestComboBox2;