import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Nav=() => {
    <div>
        <div>
            <NavLink exact to='/'>Jspang</NavLink>
            <NavLink to='/a'>JspangAAA</NavLink>
            <NavLink to='/b'>JspangBBB</NavLink>
        </div>
    </div>
}

export default Nav