import React, { Component } from 'react'
class Content extends Component {
    render() {
        let oDiv = []
        this.props.val.topValue.forEach((v, i) => {
            oDiv.push(<div key={i} className='bottom-div' style={{ display: i === this.props.index ? "block" : "none" }}>{this.props.val.bottomValue[i]}</div>)
        })
        return (
            <div className='bottom-box'>{oDiv}</div>
        )
    }
}

export default Content