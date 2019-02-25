import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import './App.css';

const About = ({match}) => {
    console.log(match)
    return (
        <div>
            About me page
        </div>
    )
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
        console.log(this.props.match)
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to={this.props.match.url + '/football'}>足球</Link></li>
                        <li><Link to={this.props.match.url + '/basketball'}>篮球</Link></li>
                        <li><Link to={this.props.match.url + '/run'}>跑步</Link></li>
                    </ul>
                    <Route path='/news/:leo' component={Sport} />
                </div>
            </Router>
        )
    }
}

class Sport extends Component {
    render() {
        let html = ""
        if (this.props.match.params.leo === "football") {
            html = "踢足球"
        } else if (this.props.match.params.leo === "basketball") {
            html = "打篮球"
        } else if (this.props.match.params.leo === "run") {
            html = "去跑步"
        }
        return (
            <div>{html}</div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'>首页</Link>
                    <span>  </span>
                    <Link to='/news'>新闻</Link>
                    <span>  </span>
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
