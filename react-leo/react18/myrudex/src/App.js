import React, { Component } from 'react';
import { createStore } from 'redux'
import list from './Reducer'

import List from './components/List'
import './App.css';

let store = createStore(list)

class App extends Component {
    add(value) {
        store.dispatch({
            type: 'add',
            text: value
        })
    }
    render() {
        return (
            <div className="App">
                <List store={store} />
            </div>
        );
    }
}

export { App, store };
