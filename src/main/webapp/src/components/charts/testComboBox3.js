import React, { Component } from 'react';
import Highcharts from '../../../node_modules/highcharts/highstock';
import $ from 'jquery';
import axios from 'axios';
import * as CONSTANT from '../../constant/constants';


class TestComboBox3 extends Component {
    state={
        getAllTest:[]
    }
    componentDidMount() {
        this.getAllTest();
    }
    getAllTest= _ =>{
        fetch("http://localhost:7080/phototest/service/getAllTest")
            .then(response=>response.json())
            .then(response=>this.setState({getAllTest:response.data}))
            .catch(err=>console.error(err))
    }
    rendergetAllTest=({getAllTest_id,name})=><div key={getAllTest_id}>{name}</div>

/* componentDidMount() {
axios.get(CONSTANT.serviceUrl + "getAllTest")
.then(result => {
for (var i = 0; i < result.data.length; i++) {
var testCase = result.data[i];
console.log(testCase.testName);
}

});
}*/

render() {
const{getAllTest}=this.state;
return (
<div className="testCombobox">
<select defaultValue={this.state.getAllTest} >
{getAllTest.map(this.rendergetAllTest)}
</select>
</div>

);
}
}

export default TestComboBox3;
