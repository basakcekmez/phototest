import React, {Component} from 'react';
import '../css/material.css';
import * as ReactDOM from "react-dom";
import {AccordionComponent, AccordionItemsDirective, AccordionItemDirective} from '@syncfusion/ej2-react-navigations';
import TestItem from "./testItem";
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
                        <AccordionItemDirective header='Cable Release' content='<div id="nested_cablerelease"></div>'/>
                        <AccordionItemDirective header='Press & Hold;' content='<div id="nested_hold"></div>'/>
                        <AccordionItemDirective header='Press & Lock;' content='<div id="nested_lock"></div>'/>
                        <AccordionItemDirective header='Timed Release;' content='<div id="nested_timedrelease"></div>'/>
                        <AccordionItemDirective header='Self Timer;' content='<div id="nested_selftimer"></div>'/>
                        <AccordionItemDirective header='Timed Release & Self Timer;' content='<div id="nested_timedreleaseselftimer"></div>'/>
                        <AccordionItemDirective header='Basic Timelapse;' content='<div id="nested_basictime"></div>'/>
                        <AccordionItemDirective header='Long exposure timelapse;' content='<div id="nested_longexposure"></div>'/>
                        <AccordionItemDirective header='Bulbramping timelapse;' content='<div id="nested_bulbramping"></div>'/>
                        <AccordionItemDirective header=' Stormlapse timelapse;' content='<div id="nested_stormlapse"></div>'/>
                        <AccordionItemDirective header='Roadlapse;' content='<div id="nested_roadlapse"></div>'/>
                        <AccordionItemDirective header='HDR/HDR Timelapse;' content='<div id="nested_hdr"></div>'/>
                        <AccordionItemDirective header='Timewarper;' content='<div id="nested_timewarper"></div>'/>
                        <AccordionItemDirective header='SmartPhone Sound Modes;' content='<div id="nested_soundmode"></div>'/>
                        <AccordionItemDirective header='SmartPhone Vibration Mode; ' content='<div id="nested_vibrationmode"></div>'/>
                        <AccordionItemDirective header='SmartPhone Motion Mode;' content='<div id="nested_motionmode"></div>'/>
                        <AccordionItemDirective header='Device Lighting Mode;' content='<div id="nested_dlighting"></div>'/>
                        <AccordionItemDirective header='Device Sound Mode;' content='<div id="nested_dsoundmode"></div>'/>
                        <AccordionItemDirective header='Device Laser Mode;' content='<div id="nested_dlasermode"></div>'/>
                        <AccordionItemDirective header='Scenario Kontrol;' content='<div id="nested_scenario"></div>'/>
                        <AccordionItemDirective header='Settings;' content='<div id="nested_settings"></div>'/>
                        <AccordionItemDirective header='DFU;' content='<div id="nested_dfu"></div>'/>
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
                <AccordionItemDirective header='- Initial exposure'/>
                <AccordionItemDirective header='- Remaining time' content="<div>{this.state.data.testResult.smart.test1}</div>"/>
                <AccordionItemDirective header='- Exposure'/>
            </AccordionItemsDirective>
        </AccordionComponent>, document.getElementById("nested_status"));

    }

    selfExpand(e) {
        if (e.element.querySelectorAll('.e-accordion').length > 0) {
            return;
        }
        ReactDOM.render(
            <div>
                <TestItem title='Remaining Time'  result={this.state.data.testResult} variableName='smart.test1'/>
            </div> ,document.getElementById("nested_selfstatus"));
    }

    expanding(e) {
        if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 0) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            ReactDOM.render(<AccordionComponent>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Fotoğraf çek'/>
                    <AccordionItemDirective header='Autofocus ile fotoğraf çek'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_cablerelease"));
        } else if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 1) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            ReactDOM.render(<AccordionComponent>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='5 saniye civarında bir fotoğraf çek.'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_hold"));
        } else if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 2) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            ReactDOM.render(<AccordionComponent>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='5 saniye civarında bir fotoğraf çek.'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_lock"));
        } else if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 3) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }

            ReactDOM.render(<AccordionComponent expanding={this.nestedExpand.bind(this)}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='- Exposure süresi 5 saniye olan bir fotoğraf çek'/>
                    <AccordionItemDirective header='Status ekranı kontrol;' content='<div id="nested_status"></div>'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_timedrelease"));
        } else if (e.isExpanded && [].indexOf.call(this.acrdnInstance.items, e.item) === 4) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }

            ReactDOM.render(<AccordionComponent expanding={this.selfExpand.bind(this)}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='- Delay süresi 5 saniye olan bir fotoğraf çek'/>
                    <AccordionItemDirective header='- Count down ekranı kontrol'/>
                    <AccordionItemDirective header='Status ekranı kontrol;' content='<div id="nested_selfstatus"></div>'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("nested_selftimer"));
        }
    }
}

export default Smart;