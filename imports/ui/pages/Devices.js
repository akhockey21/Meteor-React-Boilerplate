import React from 'react';
import { Link } from 'react-router';
import DevicesList from '../components/DevicesList';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 'auto',
  width: '100%',
  padding: 20,
  display: 'inline-block',
};

const Devices = () => (
  <Col xs={12} md={8} mdOffset={2}>
    <Paper style={style} zDepth={1}>
      <Row>
        <Col xs={12}>
          <h4 className="pull-left">Devices</h4>
          <Link to="/devices/new">
            <RaisedButton
              onTouchTap={() => (browserHistory.push('/devices'))}
              className="pull-right"
              primary={true}
              label="New"/>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DevicesList />
        </Col>
      </Row>
    </Paper>
  </Col>
);

export default Devices;
