import React, {Component} from 'react';

class TestItem extends React.Component {

    constructor(props) {
        super(props);

        var variablePath = props.variableName.split(".");
        var variableParent = props.result;
        var variableName;

        for (var i = 0; i < variablePath.length; i++) {
            if (i < variablePath.length - 1) {
                variableParent = variableParent[variablePath[i]];
            }
            if (i === variablePath.length - 1) {
                variableName = variablePath[i];
            }
        }

        this.state = {
            variableName: variableName,
            variableParent: variableParent,
            variablePath: variablePath,
            data: props.data
        };
    }


    switch = () => {
        var success = this.state.variableParent[this.state.variableName];
        this.state.variableParent[this.state.variableName] = !success;
        this.setState({})
    };

    handleFail = () => {

    };

    render() {
        var success = this.state.variableParent[this.state.variableName];

        var title = 'Başarılı';

        if (!success) {
            title = 'Başarısız';
        }
        return (
            <div>
                <div>
                    {this.props.title}
                </div>
                <button onClick={this.switch}>
                    {title}
                </button>
            </div>

        );
    }
}

export default TestItem;