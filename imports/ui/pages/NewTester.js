import React from 'react';
import TesterEditor from '../components/TesterEditor.js';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import TestersList from '../components/TestersList';
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

const NewTester = () => (
  <Col xs={12}>
    <Row>
      <Col xs={12} md={12} lg={8} lgOffset={2}>
        <Paper zDepth={1}>
          <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="Add New Tester" />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarSeparator />
              <RaisedButton label="Do Something" primary={true} />
            </ToolbarGroup>
          </Toolbar>
        </Paper>
      </Col>
      <Col xs={12} md={9} lg={6} lgOffset={2}>
        <Paper style={style} zDepth={1}>
          <Row>
            <Col xs={12}>
              <h4 className="pull-left">Tester Information</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <TesterEditor/>
            </Col>
          </Row>
        </Paper>
        <Paper style={style} zDepth={1}>
          <Row>
            <Col xs={12}>
              <Toolbar style={{backgroundColor: "#ffffff"}}>
                <ToolbarGroup firstChild={true}>
                  <ToolbarTitle style={{paddingLeft: 20}} text="Connected Facilities" />
                </ToolbarGroup>
                <ToolbarGroup>
                  <ToolbarSeparator />
                  <RaisedButton label="Create" primary={true} disabled={true} />
                  <RaisedButton label="Connect" primary={false} disabled={true} />
                </ToolbarGroup>
              </Toolbar>
            </Col>
          </Row>
        </Paper>
      </Col>
      <Col xs={12} md={3} lg={2}>
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
  </Col>
);

export default NewTester;
