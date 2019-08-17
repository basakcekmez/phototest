import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(

    <div>

         <Main/>
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

    </div>
    ,
    document.getElementById('root')
);