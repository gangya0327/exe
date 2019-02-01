require('./index.css');

let a = 98
document.write(a)

import React from 'react'
import ReactDOM from 'react-dom'

class Leo extends React.Component {
    render() {
        return (
            <div>hi leo</div>
        )
    }
}

ReactDOM.render(<Leo />, document.getElementById("app"))