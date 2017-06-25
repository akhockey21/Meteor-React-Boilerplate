/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiTheme from './MuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../../ui/layouts/App.js';
import Documents from '../../ui/pages/Documents.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import EditDocument from '../../ui/pages/EditDocument.js';
import ViewDocument from '../../ui/pages/ViewDocument.js';
import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

import Customers from '../../ui/pages/Customers.js';
import NewCustomer from '../../ui/pages/NewCustomer.js';
import EditCustomer from '../../ui/pages/EditCustomer.js';

import NewDevice from '../../ui/pages/NewDevice.js';
import EditDevice from '../../ui/pages/EditDevice.js';
import Devices from '../../ui/pages/Devices.js';

import Testers from '../../ui/pages/Testers';
import NewTester from '../../ui/pages/NewTester';
import EditTester from '../../ui/pages/EditTester';

import Facilities from '../../ui/pages/Facilities.js';
import NewFacility from '../../ui/pages/NewFacility.js';
import EditFacility from '../../ui/pages/EditFacility.js';

import EditCompany from '../../ui/pages/EditCompany';

injectTapEventPlugin();

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <MuiThemeProvider muiTheme={MuiTheme}>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute name="index" component={ Index } />

          <Route name="newCustomer" path="/customers/new" component={ NewCustomer } onEnter={ authenticate } />
          <Route name="editCustomer" path="/customers/:_id" component={ EditCustomer } onEnter={ authenticate } />
          <Route name="customers" path="/customers" component={ Customers } onEnter={ authenticate } />
          <Route name="editCustomer" path="/customers/:_id/edit" component={ EditCustomer } onEnter={ authenticate } />

          <Route name="newFacility" path="/facilities/new" component={ NewFacility } onEnter={ authenticate } />
          <Route name="editFacility" path="/facilities/:_id" component={ EditFacility } onEnter={ authenticate } />
          <Route name="facilities" path="/facilities" component={ Facilities } onEnter={ authenticate } />

          <Route name="newDevice" path="/devices/new" component={ NewDevice } onEnter={ authenticate } />
          <Route name="editDevice" path="/devices/:_id/edit" component={ EditDevice } onEnter={ authenticate } />
          <Route name="devices" path="/devices" component={ Devices } onEnter={ authenticate } />
          <Route name="editDevice" path="/devices/:_id" component={ EditDevice } onEnter={ authenticate } />

          <Route name="editCompany" path="/company" component={ EditCompany } onEnter={ authenticate } />

          <Route name="newTester" path="/testers/new" component={ NewTester } onEnter={ authenticate } />
          <Route name="editTester" path="/testers/:_id" component={ EditTester } onEnter={ authenticate } />
          <Route name="testers" path="/testers" component={ Testers } onEnter={ authenticate } />
          <Route name="editTester" path="/testers/:_id/edit" component={ EditTester } onEnter={ authenticate } />

          <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
          <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
          <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
          <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />

          <Route name="login" path="/login" component={ Login } />
          <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
          <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
          <Route name="signup" path="/signup" component={ Signup } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
    </MuiThemeProvider>,
    document.getElementById('react-root'),
  );
});
