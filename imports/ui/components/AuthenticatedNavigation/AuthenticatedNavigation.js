import React from 'react';
import PropTypes from 'prop-types';
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

  handleLogout() {
    Meteor.logout(() => browserHistory.push('/login'));
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
          title={<div style={{fontWeight: 300, textAlign: "center"}}>Reactiv.io Leads Automation</div>}
          onTitleTouchTap={() => (browserHistory.push('/'))}
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{backgroundColor: "#E0162B"}}
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
                  <p style={{marginLeft: 10}}>{this.userName()}</p>
                  <Menu>
                    <MenuItem leftIcon={<ExitToApp/>} primaryText="Sign out" onTouchTap={this.handleLogout}/>
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
            style={{backgroundColor: "#0052A5"}}
          />
          <MenuItem primaryText="Home" leftIcon={<Home />} containerElement={<Link to="/"/>} onTouchTap={this.handleToggle} />
          <MenuItem primaryText="Documents" leftIcon={<InsertDriveFile />} containerElement={<Link to="/documents"/>} onTouchTap={this.handleToggle} />
          <MenuItem primaryText="Customers" leftIcon={<InsertDriveFile />} containerElement={<Link to="/customers"/>} onTouchTap={this.handleToggle} />
        </Drawer>
        <Drawer open={this.state.openRightDrawer} openSecondary={true}>
          <AppBar
            title="Activity"
            style={{backgroundColor: "#0052A5"}}
            onLeftIconButtonTouchTap={this.handleToggleRight} />
          <p style={{marginLeft: 10}}>Who's Online</p>
          <div className="chat-window ng-scope" data-ng-controller="ChatWindowCtrl as chatwindow" style={{overflow: 'visible'}}>
            <div className="friends-list">
              {/* ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Philip Gragoline" userlocation="New york" userimage="/images/team1.jpg" useronline><div className="friend-item online">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team1.jpg" alt src="/images/team1.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Philip Gragoline</h5>
                        <h6 className="ng-binding">
                          New york
                        </h6>
                      </div>
                      <div className="md-ripple-container" /></a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Chris Factory" userlocation="New York" userimage="/images/team2.jpg" useronline><div className="friend-item online">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team2.jpg" alt src="/images/team2.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Chris Factory</h5>
                        <h6 className="ng-binding">
                          New York
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Tony Banken" userlocation="DC City" userimage="/images/team3.jpg" useronline><div className="friend-item online">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team3.jpg" alt src="/images/team3.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Tony Banken</h5>
                        <h6 className="ng-binding">
                          DC City
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Angus Dokey" userlocation="Stanford" userimage="/images/team4.jpg" useronline><div className="friend-item online">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team4.jpg" alt src="/images/team4.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Angus Dokey</h5>
                        <h6 className="ng-binding">
                          Stanford
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Chad Stokely" userlocation="Chicago" userimage="/images/team5.jpg" useronline><div className="friend-item online">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team5.jpg" alt src="/images/team5.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Chad Stokely</h5>
                        <h6 className="ng-binding">
                          Chicago
                        </h6>
                      </div>
                      <div className="md-ripple-container" /></a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Francis Copeland" userlocation="San Francisco" userimage="/images/team6.jpg" useronline><div className="friend-item online">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team6.jpg" alt src="/images/team6.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Francis Copeland</h5>
                        <h6 className="ng-binding">
                          San Francisco
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Philip Gragoline" userlocation="New york" userimage="/images/team1.jpg" useronline><div className="friend-item offline">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team1.jpg" alt src="/images/team1.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Philip Gragoline</h5>
                        <h6 className="ng-binding">
                          New york
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Chris Factory" userlocation="New York" userimage="/images/team2.jpg" useronline><div className="friend-item offline">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team2.jpg" alt src="/images/team2.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Chris Factory</h5>
                        <h6 className="ng-binding">
                          New York
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Tony Banken" userlocation="DC City" userimage="/images/team3.jpg" useronline><div className="friend-item offline">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team3.jpg" alt src="/images/team3.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Tony Banken</h5>
                        <h6 className="ng-binding">
                          DC City
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Angus Dokey" userlocation="Stanford" userimage="/images/team4.jpg" useronline><div className="friend-item offline">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team4.jpg" alt src="/images/team4.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Angus Dokey</h5>
                        <h6 className="ng-binding">
                          Stanford
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Chad Stokely" userlocation="Chicago" userimage="/images/team5.jpg" useronline><div className="friend-item offline">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team5.jpg" alt src="/images/team5.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Chad Stokely</h5>
                        <h6 className="ng-binding">
                          Chicago
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}<div ng-repeat="friend_it in chatwindow.friends_list" className="ng-scope">
                <friend-item username="Francis Copeland" userlocation="San Francisco" userimage="/images/team6.jpg" useronline><div className="friend-item offline">
                    <a href="javascript:;" className="md-ink-ripple">
                      <div className="friend-image">
                        <img ng-src="/images/team6.jpg" alt src="/images/team6.jpg" />
                      </div>
                      <div className="friend-name">
                        <h5 className="ng-binding">Francis Copeland</h5>
                        <h6 className="ng-binding">
                          San Francisco
                        </h6>
                      </div>
                    </a>
                  </div></friend-item>
              </div>{/* end ngRepeat: friend_it in chatwindow.friends_list */}
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

AuthenticatedNavigation.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AuthenticatedNavigation;
