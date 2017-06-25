import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Devices from '../../api/devices/devices';
import DeviceEditor from '../components/DeviceEditor';
import NotFound from './NotFound';
import container from '../../modules/container';

import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  height: 'auto',
  width: '100%',
  padding: 20,
  display: 'inline-block',
  marginTop: 10,
};

const EditDevice= ({ device }) => (device ? (
    <Row>
      <Col xs={12} lg={8} lgOffset={2}>
        <Paper zDepth={1}>
          <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="Edit Device" />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarSeparator />
              <RaisedButton label="Email" primary={false} style={{margin: 5}} />
              <RaisedButton label="Print Invoice" primary={false} style={{margin: 5}} />
              <RaisedButton label="Do Something" primary={false} style={{margin: 5}} />
            </ToolbarGroup>
          </Toolbar>
        </Paper>
      </Col>
      <Col xs={12} md={9} lg={6} lgOffset={2}>
        <Paper style={style} zDepth={1}>
          <Row>
            <Col xs={12}>
              <h4 className="pull-left">Device Information</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <DeviceEditor device={ device }/>
            </Col>
          </Row>
        </Paper>
      </Col>
      <Col xs={12} md={3} lg={2} >
        <Paper style={style} zDepth={1}>
          <Row>
            <Col xs={12}>
              <h4 className="pull-left">Activity Log</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ActivityFeed />
            </Col>
          </Row>
        </Paper>
      </Col>
    </Row>
) : <NotFound />);

EditDevice.propTypes = {
    device: PropTypes.object,
};

export default container((props, onData) => {
    const deviceId = props.params._id;
    const subscription = Meteor.subscribe('devices.view', deviceId);

    if (subscription.ready()) {
        const device = Devices.findOne(deviceId);
        onData(null, { device });
    }
}, EditDevice);
