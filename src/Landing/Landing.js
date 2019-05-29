import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import "./Landing.css"

class Landing extends Component {
    render() {
        return (
            <div>
                <header className="header">
                <div className="logo-box">
                    <img src="./img/logo-white.png" alt="Logo" className="logo" />
                </div>

                    <div className="text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary-main">Apptracker</span>
                            <span className="heading-primary-sub">Keep Track</span>
                        </h1>

                        <a href="/login" className="btn btn-white btn-animated">Login</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default withRouter(Landing)