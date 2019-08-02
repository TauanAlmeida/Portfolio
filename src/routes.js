import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

const Routes = () => (
    <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/sobre" component={Sobre}/>
    </Switch>
)

export default Routes