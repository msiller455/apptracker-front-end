import React, { Component } from 'react'
import { jsxOpeningElement } from '@babel/types';

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
        const newCreator = {
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
            <div>

            </div>
        )
    }

}

export default withRouter(Register)