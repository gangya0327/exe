import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import './App.css';

class Content extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={this.props.match.url + '/home'}>首页</Link>
                    <Link to={this.props.match.url + '/news'}>新闻</Link>
                    <Link to={this.props.match.url + '/about'}>关于</Link>
                    <Route path={this.props.match.url + '/:name'} component={Content} />
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
                    无限调用
                    <br />
                    <Link to='/home'>首页</Link>
                    <span>  </span>
                    <Link to='/news'>新闻</Link>
                    <span>  </span>
                    <Link to='/about'>关于</Link>

                    <Route exact path='/:link' component={Content} />
                </div>
            </Router>
        );
    }
}

export default App2;
