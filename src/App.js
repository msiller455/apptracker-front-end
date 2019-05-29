import React, { Component } from 'react'
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Landing from './Landing/Landing'
import Login from './Auth/Login/Login'
import Register from './Auth/Login/Register'

class App extends Component {

  state = {
    loggedUser: {}
  }

  doLoginUser = async (user) => {
    try{
      const loginResponse =  await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText)
      }

      const parsedResponse = await loginResponse.json();
      if (parsedResponse.message === "login successful") {
        this.setState({
          loginError: parsedResponse.message
        });
      }

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={() => <Landing />} />
          <Route exact path="/login" component={() => <Login doLoginUser={this.doLoginUser}/>} />
          <Route exact path="/register" component={() => <Register />} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
