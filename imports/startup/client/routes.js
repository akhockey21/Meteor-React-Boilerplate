/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiTheme from './MuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../../ui/layouts/App.js';
import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

import Customers from '../../ui/pages/Customers.js';
import NewCustomer from '../../ui/pages/NewCustomer.js';
import EditCustomer from '../../ui/pages/EditCustomer.js';

import Documents from '../../ui/pages/Documents.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import EditDocument from '../../ui/pages/EditDocument.js';
import ViewDocument from '../../ui/pages/ViewDocument.js';

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
