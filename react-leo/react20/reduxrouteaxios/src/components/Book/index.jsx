import React, { Component } from 'react'
import $ from 'jquery'
import store from '../../store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Mybook extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>1414</div>
        )
    }
}

class Book extends Component {
    click(){
        console.log(1414)
        store.dispatch({
            type: "book_add"
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <Link to='/01' onClick={this.click.bind(this)}>文章1</Link>
                    <span> </span>
                    <Link to='/02'>文章2</Link>
                    <span> </span>
                    <Link to='/03'>文章3</Link>
                    <Route path='/:id' component={Mybook}></Route>
                </div>
            </Router>
        )
    }
}

export default Book