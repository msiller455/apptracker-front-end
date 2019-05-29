import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import './Register.css'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    doHandleInput = (e) => {
        this.setState({
            [e.target.name]:  e.target.value
        })
    }

    doHandleSubmit = (e) => {
        e.preventDefault()
        this.props.doLoginUser(this.state)
    }

    render(){
        return(
            <div className='FormCenter'>
                <div className='PageSwitcher'>
                    <NavLink exact to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign In</NavLink>
                    <NavLink exact to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>
                <div>
                    <form className="FormFields" onSubmit={this.doHandleSubmit}>
                        <div className='FormField'>
                            <input
                                placeholder='email'
                                type='text'
                                name='email'
                                value={this.state.email}
                                onChange={this.doHandleInput}
                                className="FormField__Input"
                                required
                            />
                        </div>
                        <div className='FormField'>
                            <input
                                type='password'
                                name='password'
                                placeholder='password'
                                value={this.state.password}
                                onChange={this.doHandleInput}
                                className="FormField__Input"
                                required
                            />
                        </div>
                        <div className='Formfield'>
                            <button type='submit' className="FormField__Button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default withRouter(Login)