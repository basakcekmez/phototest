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
        var success = this.getTestItemResult();
        this.setTestItemResult(!success);
        //to rerender component
        this.setState({})
    };


    getTestItemResult = () => {
        return this.state.variableParent[this.state.variableName];
    };

    setTestItemResult = (result: boolean) => {
        this.state.variableParent[this.state.variableName] = result;
    };

    render() {
        var success = this.getTestItemResult();

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