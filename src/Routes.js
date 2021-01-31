import React from 'react';

import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from "./core/Home";

const MyRoutes = () =>{
    return(
        
            <BrowserRouter>
            <Switch>
            
                <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        
    )
}

export default MyRoutes