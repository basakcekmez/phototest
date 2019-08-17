import React, {Component} from 'react';
import TestComboBox from "./testComboBox";
import Smart from "./smart";
const AppContext = React.createContext()

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {testResult:null,callBacks:[]},
        };
    }

    render() {
        return (
            <div>
                <TestComboBox data={this.state.data}/>
                <Smart data={this.state.data}/>
            </div>

        );
    }
}
Main.data= {testResult:null}
export default Main;