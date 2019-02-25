import React, { Component } from 'react'



class Counter extends Component {
    odd(value, onAdd) {
        if (value % 2 === 0) {
            onAdd()
        }
    }
    render() {
        let { value, onAdd, onCut } = this.props
        return (
            <div>
                <input type="button" value="-" onClick={onCut} />
                <span>{value}</span>
                <input type="button" value="+" onClick={onAdd} />
                <input type="button" value="odd" onClick={this.odd.bind(this, value, onAdd)} />
            </div>
        )
    }
}

export default Counter