import React, {Component} from 'react';


class Smart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };

        this.state.data.callBacks.push(this.myCallback);
    }

    myCallback = (testResult) => {
        this.setState({ data:{testResult: testResult }});
    }

    render() {
        if (this.state.data.testResult) {
            if(this.state.data.testResult.smart){
                return (
                    <div>
                        <h1>{this.state.data.testResult.smart.test1}</h1>
                    </div>
                );
            }
        }

        return (
            <div>
            </div>
        );
    }
}

export default Smart;