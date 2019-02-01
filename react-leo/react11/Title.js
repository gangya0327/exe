import React, { Component } from 'react'
class Title extends Component {
    constructor() {
        super()
    }
    render() {
        let oLi = []
        this.props.topValue.forEach((v, i) => {
            oLi.push(<li className={i === this.props.index ? 'active' : ''} 
            key={i}
            onMouseOver={this.props.clickLi.bind(this,i)}>{v}</li>)
        });
        return (
            <div className='top-box'>
                <ul>{oLi}</ul>
            </div>
        )
    }
}

export default Title