import React from 'react';
import ReactDOM from 'react-dom';
import TaskCount from './components/charts/taskCount';
import TpsCount from './components/charts/tpsCount';
import SuccessCount from './components/charts/successCount';
ReactDOM.render(
    <div>
        <TaskCount />
        <TpsCount />
        <SuccessCount />
    </div>
    ,
    document.getElementById('root')
);
