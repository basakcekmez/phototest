import React from 'react';
import ReactDOM from 'react-dom';
import TaskCount from './components/charts/taskCount';
import TpsCount from './components/charts/tpsCount';
import SuccessCount from './components/charts/successCount';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
    <div>

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <br/><br/><br/><br/>

                        <ul className="list-group list-group-horizontal">

                            <a href="smapp.html" className="list-group-item list-group-item-primary">Smart App</a>
                            <a href="remote.html" className="list-group-item list-group-item-warning">Remote Plus</a>
                            <a href="mobile.html" className="list-group-item list-group-item-success">Mobıle App</a>
                            <a href="dongle.html" className="list-group-item list-group-item-danger">Dongle App</a>
                            <a href="splash.html" className="list-group-item list-group-item-warning">Splash App</a>
                            <a href="smfw.html" className="list-group-item list-group-item-info">Smart Fw</a>
                        </ul>

                </div>
            </div>
        </div>

        {  /*
        <TaskCount />
        <TpsCount />
        <SuccessCount />*/}
    </div>
    ,
    document.getElementById('root')
);
