import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div>
                <h1>This is the landing</h1>
            </div>
        )
    }
}

export default withRouter(Landing)