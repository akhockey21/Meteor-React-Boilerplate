import React from 'react';
import { Link } from 'react-router';
import CustomersList from '../components/CustomersList';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 'auto',
  width: '100%',
  padding: 20,
  display: 'inline-block',
};

const Customers = () => (
  <Col xs={12} md={8} mdOffset={2}>
    <Paper style={style} zDepth={1}>
      <Row>
        <Col xs={12}>
          <h4 className="pull-left">Customers</h4>
          <Link to="/customers/new">
            <RaisedButton
              onTouchTap={() => (browserHistory.push('/customers'))}
              className="pull-right"
              primary={true}
              label="New"/>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CustomersList />
        </Col>
      </Row>
    </Paper>
  </Col>
);

export default Customers;
