import React, { Component } from 'react';
import List from './components/List';
import { createStore } from 'redux'
import list from './Reducer/list'
import './App.css';

let store = createStore(list)

console.log(store)


class App extends Component {
    render() {
        return (
            <div className="App">
                <List store={store}></List>
            </div>
        );
    }
}

export { App, store };
