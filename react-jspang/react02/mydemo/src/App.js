import React, { Component } from 'react';
import TabExample from './components/Tabs'
import Demo from './components/ListView'
import 'antd-mobile/dist/antd-mobile.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabExample />
      </div>
    );
  }
}

export default App;
