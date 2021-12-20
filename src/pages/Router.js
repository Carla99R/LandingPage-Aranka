import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "../components/appBar";
import Home from "./App";
import Info from "../components/Info";
import Promotions from "../components/Promotions";
import Contact from "../components/Contact";
import Location from "../components/Location";

function Routers() {
    return (
        <>
            <div>
                <Router>
                    <Switch>
                        <Route component={Navbar}/>
                    </Switch>
                </Router>
            </div>
            <section>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/info' component={Info}/>
                        <Route exact path='/promotions' component={Promotions}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/location' component={Location}/>


                    </Switch>
                </Router>
            </section>

        </>
    );
}

export default Routers;