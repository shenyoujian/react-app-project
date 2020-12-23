import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import routeArr from '../src/config/routers'

import './App.css'

export default class App extends Component {
    render() {
        console.log(routeArr)
        return (
           
           <Router>
               {routeArr.map(item=>{
                    return <Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>
               })}
           </Router>
        )
    }
}
