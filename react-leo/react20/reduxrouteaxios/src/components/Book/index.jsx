import React, { Component } from 'react'
// import $ from 'jquery'
import axios from 'axios'
import store from '../../store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as asy from './as'


class Mybook extends Component {
    componentWillMount() {
        asy.getData1()
    }

    // getData1 = () => {
    //     axios({
    //         method: 'get',
    //         url: "http://192.168.1.205:8081/pmsProduct/category/list",
    //     })
    //         .then(response => response.data)
    //         .then(data => {
    //             console.log(1, data)       
    //         })
    //         .catch(error => {
    //             alert(JSON.stringify(error))
    //         })
    // }
    // getData2 = () => {
    //     axios({
    //         method: 'get',
    //         url: "http://192.168.1.205:8081/esProduct/search?pageSize=5&sort=0",
    //     })
    //         .then(response => response.data)
    //         .then(data => {
    //             console.log(2, data)
    //         })
    //         .catch(error => {
    //             alert(JSON.stringify(error))
    //         })
    // }

    render() {
        return (
            <div>1414</div>
        )
    }
}

class Book extends Component {
    click() {
        console.log(1414)
        store.dispatch({
            type: "book_add"
        })
    }
    render() {
        let data = {
            name: "yml",
            age: 16
        }
        return (
            <Router>
                <div>
                    <Link to={{
                        pathname: '/01',
                        state: data
                    }}
                        onClick={this.click.bind(this)}>文章1</Link>
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