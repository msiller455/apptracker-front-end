import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    doHandleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    doHandleSubmit = (e) => {
        e.preventDefault()
        this.props.doLoginUser(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.doHandleSubmit}>
                    <input
                        placeholder='email'
                        name='email'
                        type='text'
                        value={this.state.email}
                        onChange={this.doHandleInput}
                        required
                    />
                    <input
                        placeholder='password'
                        name='password'
                        type='text'
                        value={this.state.password}
                        onChange={this.doHandleInput}
                        required
                    />
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }

}

export default withRouter(Login)