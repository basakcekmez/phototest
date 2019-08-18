import React, {Component} from 'react';
import '../css/material.css';
import * as ReactDOM from "react-dom";
import {AccordionComponent, AccordionItemsDirective, AccordionItemDirective} from '@syncfusion/ej2-react-navigations';

class Smart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };

        this.state.data.callBacks.push(this.myCallback);
    }

    myCallback = (testResult) => {
        this.setState({data: {testResult: testResult}});
    }

    render() {
        if (this.state.data.testResult) {
            if (this.state.data.testResult.smart) {
                return (<AccordionComponent expanding={this.expanding.bind(this)} ref={acrdn => this.acrdnInstance = acrdn}>
                    <h1>{this.state.data.testResult.smart.test1}</h1>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header='Video' content='<div id="nested_video"></div>'/>
                        <AccordionItemDirective header='Music' content='<div id="nested_music"></div>'/>
                        <AccordionItemDirective header='Images' content='<div id="nested_images"></div>'/>
                    </AccordionItemsDirective>
                </AccordionComponent>);

            }
        }

        return (<div/>)
    }
    nestedExpand(e) {
        if (e.element.querySelectorAll('.e-accordion').length > 0) {
            return;
        }
        ReactDOM.render(<AccordionComponent>
            <AccordionItemsDirective>
                <AccordionItemDirective header='New Track1'/>
                <AccordionItemDirective header='New Track2'/>
            </AccordionItemsDirective>
        </AccordionComponent>, document.getElementById("nested_musicNew"));
    }
    expanding(e) {
        if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 0) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            ReactDOM.render(<AccordionComponent>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Video Track1'/>
                    <AccordionItemDirective header='Video Track2'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_video"));
        } else if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 1) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            ReactDOM.render(<AccordionComponent expanding={this.nestedExpand}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Music Track1'/>
                    <AccordionItemDirective header='Music Track2'/>
                    <AccordionItemDirective header='Music New' content='<div id="nested_musicNew"></div>'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_music"));
        } else if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 2) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            ReactDOM.render(<AccordionComponent>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Track1'/>
                    <AccordionItemDirective header='Track2'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_images"));
        }
    }
}

export default Smart;