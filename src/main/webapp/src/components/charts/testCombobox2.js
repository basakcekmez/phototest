
import React, { Component } from 'react';
import Select from 'react-select';
import faker from "faker";


const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
];

class TestComboBox2 extends Component {
    state={
        selectedOption: null
    }
    componentDidMount() {
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        return (
           <div>
               <Select options={scaryAnimals}   onChange={this.handleChange}/>
           </div>

        );
    }
}

export default TestComboBox2;