import React, { Component } from 'react';
import './App.css';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin()

import AppBarExampleIcon from './components/header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBarExampleIcon></AppBarExampleIcon>
            </div>
        );
    }
}

export default App;
