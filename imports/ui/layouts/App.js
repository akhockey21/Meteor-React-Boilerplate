import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import AppNavigation from '../components/AppNavigation';

const App = ({ children }) => (
  <div>
    <AppNavigation />
    <Grid style={{ marginTop: '40px', marginBottom: '40px' }} fluid>
      <Row>
        { children }
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
    children: PropTypes.node,
};

export default App;
