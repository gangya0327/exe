import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import './App.css';

class About extends Component {
    render() {
        return (
            <div>
                About page
            </div>
        )
    }
}
class Home extends Component {
    render() {
        return (
            <div>
                Home page
            </div>
        )
    }
}
class News extends Component {
    render() {
        return (
            <div>
                News page
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'>首页</Link>
                    <Link to='/news'>新闻</Link>
                    <Link to='/about'>关于</Link>

                    <Route exact path='/' component={Home} />
                    <Route path='/news' component={News} />
                    <Route path='/about' component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
