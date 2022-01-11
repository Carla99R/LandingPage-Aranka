import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/App";
import 'antd/dist/antd.css';


ReactDOM.render(
    <div style={{backgroundColor:"whitesmoke"}}>
        <Home/>
    </div>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
