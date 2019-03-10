// function component() {
//     var element = document.createElement('div')
//     element.innerHTML = ('hello webpack 11')
//     return element
// }

// document.body.appendChild(component())

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Jspang from './Jspang';
import JspangA from './Jspanga';
import JspangB from './Jspangb';
import Nav from './nav'
import Error from './error'

ReactDOM.render(
    <Router basename='demo' forceRefresh={false}>
        <div>
            <Nav></Nav>
            <Switch>
                <Route exact path='/' component={Jspang} />
                <Route path='/a' component={JspangA} />
                <Route path='/b/:parama/:paramb' component={JspangB} />
                <Redirect from='/redirect' to='/b' />
                <Route component={Error} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('app')
)

// ReactDOM.render(
//     <div>141</div>,
//     document.getElementById('app')
// )