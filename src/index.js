import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './pages/Router';
import reportWebVitals from './reportWebVitals';
import Contact from "./components/Contact";
import Home from "./pages/App";
import Info from "./components/Info";

ReactDOM.render(
    <div style={{width:'100vw', overflowX:'hidden'}}>
        <Home/>
    </div>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
