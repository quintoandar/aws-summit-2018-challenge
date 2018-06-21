import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Input from '@material-ui/core/Input';

class App extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      msg: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const API_LINK = 'http://aws-challenge.quintoandar.com.br/contact/'
    let name = this.state.name;
    let email = this.state.email;
    let phone = this.state.phone;
    let company = this.state.company;
    if (!!name && !!email && !!phone && !!company) {
      fetch(API_LINK, {
        headers: {
          "Content-Type": "application/json",
          "front": "pwa"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          contactOptIn: true,
          company: this.state.company
        }), method: "POST", mode: "cors"
      }).then(response => response.json())
        .then(response => this.setState({ msg: response.msg }))
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          Name: <Input onChange={this.onChange} name='name' value={this.state.name} /><br/>
          Email: <Input onChange={this.onChange} name='email' value={this.state.email} /><br/>
          Phone: <Input onChange={this.onChange} name='phone' value={this.state.phone} /><br/>
          Company: <Input name='company' onChange={this.onChange} value={this.state.company} /><br/>
          <input type="submit" value="Submit" />
        </form>
        <h1>{!!this.state.msg && this.state.msg}</h1>
      </div>
    );
  }
}

export default App;
