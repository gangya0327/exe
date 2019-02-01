import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title'
import Content from './Content'
require('./tab.css')

let tabJson = {
    topValue: ['tab1','tab2','tab3'],
    bottomValue: ['tab1-context','tab2-context','tab3-context']
}

class Tab extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 1
        }
    }
    change(i){
        console.log(i)
        this.setState({
            index: i
        })
    }
    render() {
        return (
            <div className="out-box">
                <Title topValue={this.props.val.topValue} index={this.state.index} clickLi={this.change.bind(this)}></Title>  
                <Content val={this.props.val} index={this.state.index}></Content>
            </div>
        )
    }
}

ReactDOM.render(<Tab val={tabJson} />, document.getElementById("app"))