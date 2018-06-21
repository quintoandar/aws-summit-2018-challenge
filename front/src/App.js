import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import Typography from '@material-ui/core/Typography';

import Logo from './logo.png';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      contactOptIn: true,
      dialogMsg: '',
      prizeDialogOpen: false,
    };
  }
  
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChange = (event, name) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChangeContactOpt = (event) => {
    this.setState({
      contactOptIn: event.target.checked,
    });
  }

  setDialogMessage = (message) => {
    this.setState({
      dialogMsg: message,
    });
    this.toggleDialog();
  };

  getPrize = () => {
    // TODO validate
    fetch("https://aws-challenge.quintoandar.com.br/contact/", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'front': 'pwa',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        company: this.state.company,
        contactOptIn: this.state.contactOptIn,
      }),
    }).then((response) => {
      response.json().then((message) => {
        this.setDialogMessage(message.msg);
      });
    });
  }

  toggleDialog = () => {
    this.setState({ prizeDialogOpen: !this.state.prizeDialogOpen });
  }

  render() {
    return (
      <React.Fragment>
        <div className={'wrapper'}>
          <Card className={'card'}>
            <CardHeader
              avatar={<Avatar src={Logo} />}
              title={'QuintoAndar Challenge'}
              subheader={'Submit your info and win a prize'}
            />
            <CardContent className={'card-content'}>
              <TextField
                margin={'dense'} value={this.state.name} label={'Name'} onChange={this.handleChangeName} required />
              <TextField
                margin={'dense'} value={this.state.email} label={'Email'} onChange={(e) => this.handleChange(e, 'email')} required />
              <TextField
                margin={'dense'} value={this.state.phone} label={'Phone'} onChange={(e) => this.handleChange(e, 'phone')} required />              
              <TextField
                margin={'dense'} value={this.state.company} label={'Company'} onChange={(e) => this.handleChange(e, 'company')} required />              
              <div className={'contact-opt'}>
                <Typography variant="caption">
                  I'm interested in being contacted by QuintoAndar after the event regarding job opportunities
                </Typography>
                <Switch checked={this.state.contactOptIn} onChange={this.handleChangeContactOpt} /> 
              </div>
              </CardContent>
            <CardActions className={'card-actions'}>
              <Button
                variant={'raised'}
                color={'primary'}
                onClick={this.getPrize}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </div>
        <Dialog open={this.state.prizeDialogOpen}>
          <DialogTitle>
            {this.state.dialogMsg}
          </DialogTitle>
          <DialogActions>
            <Button color={'primary'} onClick={this.toggleDialog}>Ok</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default App;
