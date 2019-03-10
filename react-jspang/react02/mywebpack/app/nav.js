import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

// const Nav = () => {

// }

class Nav extends React.Component {
    render() {
        return (
            <div>
                <NavLink className='blue' exact to='/'>Jspang 000</NavLink> &nbsp;|&nbsp;
                <NavLink style={{ "fontSize": "28px" }} to='/a'>JspangAAA</NavLink>&nbsp;|&nbsp;
                <NavLink style={{ fontSize: "32px" }} to='/b/love/react'>JspangBBB</NavLink>&nbsp;|&nbsp;
                <NavLink to='/react'>JspangBBB</NavLink>&nbsp;|&nbsp;
                <NavLink to='redirect'>Redirect</NavLink>

            </div>
        )
    }
}

export default Nav