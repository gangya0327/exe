import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import './App.css';

class Book extends Component {
    render() {
        return (
            <Router>
                <div>
                   123
                </div>
            </Router>
        )
    }
}

class App2 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/001'>文字1</Link>
                    <span>  </span>
                    <Link to='/002'>文字2</Link>
                    <span>  </span>
                    <Link to='/003'>文字3</Link>

                    <Route exact path='/:id' component={Book} />
                </div>
            </Router>
        );
    }
}

export default App2;
