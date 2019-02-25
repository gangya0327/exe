import React, { Component } from 'react'

class List extends Component {
    add() {
        this.props.store.dispatch({
            type: "add",
            text: this.refs.input.value
        })
    }
    render() {
        let aLi = []
        this.props.store.getState().forEach((v, i) => {
            aLi.push(<li key={i} onClick={() => this.props.store.dispatch({ type: "remove", index: i })}>{v}</li>)
        });
        return (
            <div>
                <input type="text" ref="input" />
                <input type="button" value="add" onClick={this.add.bind(this)} />
                <ul>
                    {aLi}
                </ul>
            </div>
        )
    }
}

export default List