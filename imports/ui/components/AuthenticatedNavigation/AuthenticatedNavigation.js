import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home';
import InsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import { red500, white, blue500 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

class AuthenticatedNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      openRightDrawer: false,
      openRight: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleToggleRight = this.handleToggleRight.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleToggleRight() {
    this.setState({ openRightDrawer: !this.state.openRightDrawer });
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openRight: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      openRight: false,
    });
  }

  userName() {
    const user = this.props.name;
    const name = user && user.profile ? user.profile.name : '';
    return user ? user : '';
  }

  userAvatarLetters() {
    const user = this.props.name;
    const name = user ? user : '';
    const first = name.first.charAt(0);
    const last = name.last.charAt(0);
    return `${first}${last}`;
  }

  render() {
    return (
      <div>
        <AppBar
          label="Toggle Drawer"
          title={<div style={{fontWeight: 300, textAlign: "center"}}>Your Company</div>}
          onTitleTouchTap={() => (browserHistory.push('/'))}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<MoreVertIcon />}
          iconElementRight={
            <div>
              <IconButton onTouchTap={this.handleToggleRight}>
                <MoreVertIcon color="#ffffff" />
              </IconButton>
              <IconButton
              onTouchTap={this.handleTouchTap.bind(this)}
              tooltip={this.userName()}
              labelPosition="after">
                <AccountCircle color="#ffffff" />
                <Popover
                  open={this.state.openRight}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                  onRequestClose={this.handleRequestClose.bind(this)}
                >
                  <p style={{marginLeft: 10, marginTop: 10}}>{this.userName()}</p>
                  <Menu>
                    <MenuItem leftIcon={<ExitToApp/>} primaryText="Sign out" onTouchTap={() => this.props.history.push('/logout')}/>
                  </Menu>
                </Popover>
              </IconButton>
            </div>
          }
        />
        <Drawer
          docked={true}
          open={this.state.open}
          zDepth={1}>
          <AppBar
            title="Menu"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <MenuItem primaryText="Home" leftIcon={<Home />} containerElement={<Link to="/"/>} onTouchTap={this.handleToggle} />
          <MenuItem primaryText="Documents" leftIcon={<InsertDriveFile />} containerElement={<Link to="/documents"/>} onTouchTap={this.handleToggle} />
        </Drawer>
        <Drawer open={this.state.openRightDrawer} openSecondary={true}>
          <AppBar
            title="Activity"
            onLeftIconButtonTouchTap={this.handleToggleRight} />
          <p style={{marginLeft: 10}}>Who's Online</p>
        </Drawer>
      </div>
    );
  }
}

AuthenticatedNavigation.propTypes = {
  name: PropTypes.string.isRequired,
};

export default withRouter(AuthenticatedNavigation);
