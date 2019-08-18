import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";

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
        var color = "#00cc23";
        var title = 'Başarılı';

        if (!success) {
             color = "#cacbcc";
            title = 'Başarısız';
        }
        title = "Sonuç: " + title;
        return (
            <div>
                <div>
                    {this.props.title}
                </div>
                <View style={styles.alternativeLayoutButtonContainer}>
                <Button onPress={this.switch} title= {title}   color={color}/>
                </View>
            </div>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default TestItem;