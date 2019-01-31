import React from 'react'
import ReactDOM from 'react-dom'

class Leo extends React.Component {
    constructor(){
        super()
        this.state={
            msg: "react"
        }
    }
    render() {
        return (
            <div>hi leo {this.state.msg}</div>
        )
    }
}

ReactDOM.render(<Leo />, document.getElementById("app"))