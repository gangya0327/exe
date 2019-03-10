import React from 'react'

class JspangB extends React.Component {
    componentWillMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>jspang bbb parama: {this.props.match.params.parama},paramb: {this.props.match.params.paramb}</div>
        )
    }
}

export default JspangB