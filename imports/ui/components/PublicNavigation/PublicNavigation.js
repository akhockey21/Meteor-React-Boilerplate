import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { browserHistory } from 'react-router';
import Login from '../../components/Login';
import Signup from '../../components/Signup';

export default class PublicNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      login: true,
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleDisplayLogin(boolean) {
    this.setState({ login: boolean });
  }

  renderDialog() {
    if (this.state.login) {
      return (
        <Login
          handleClose={this.handleClose.bind(this)}
          displayLogin={this.handleDisplayLogin.bind(this)}
        />
      );
    }
    return <Signup displayLogin={this.handleDisplayLogin.bind(this)}/>;
  }

  renderSignInButton() {
    if (window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === '/reset-password' || window.location.pathname === '/recover-password') {
      return <FlatButton label="Sign In" onTouchTap={() => (browserHistory.push('/login'))}/>;
    }
    return <FlatButton label="Sign In" onTouchTap={this.handleOpen.bind(this)}/>;
  }

  render() {
    const customContentStyle = {
      width: '400',
      maxWidth: 'none',
    };
    const styles = {
      cursor: 'auto',
    };
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];
    return (
      <div>
        <AppBar
          label="Toggle Drawer"
          title="Boilerplate"
          onTitleTouchTap={() => (browserHistory.push('/'))}
          showMenuIconButton={false}
          iconElementRight={this.renderSignInButton()}
          titleStyle={styles}
        />
        <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose.bind(this)}
            contentStyle={customContentStyle}
            autoScrollBodyContent={true}
          >
            {this.renderDialog()}
        </Dialog>
      </div>
    );
  }
}
