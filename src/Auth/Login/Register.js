import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import './Register.css'

class Register extends Component {
    state = {
        email: '',
        name: '',
        password: ''
    }

    handlChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = async e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        try {
            const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/users`,
                {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(newUser),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText)
            }

            const parsedResponse = await loginResponse.json()

            if (parsedResponse.message === 'Registration successful.') {
                this.props.history.push('/landing');
            }

        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div className='FormCenter'>
            <div className='PageSwitcher'>
                <NavLink exact to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</NavLink>
                </div>
                <form onSubmit={this.handleSubmit} className='FormFields'>
                    <div className='FormField'>
                        <label className='FormField__Label'></label>
                        <input
                            type='text'
                            placeholder='Enter your name'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="FormField__Input"
                        />
                    </div>

                    <div className='FormField'>
                        <label className='FormField__Label'></label>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            className="FormField__Input"
                        />
                    </div>

                    <div className='FormField'>
                        <label className='FormField__Label'></label>
                        <input
                            type='password'
                            placeholder='Enter your Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="FormField__Input"
                        />
                    </div>

                    <div className='FormField'>
                        <button className="FormField__Button">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default withRouter(Register)