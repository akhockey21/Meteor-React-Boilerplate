import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Company from '../../api/company/company';
import CompanyEditor from '../components/CompanyEditor';
import NotFound from './NotFound';
import container from '../../modules/container';

import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import CustomersList from '../components/CustomersList';
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

const EditCompany= () => (
  <Col xs={12}>
    <Row>
      <Col xs={12} md={12} lg={8} lgOffset={2}>
        <Paper zDepth={1}>
          <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="Edit Company" />
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
              <h4 className="pull-left">Company Information</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CompanyEditor/>
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
                  <RaisedButton label="Create New" primary={true} />
                  <RaisedButton label="Connect Existing" primary={false} />
                </ToolbarGroup>
              </Toolbar>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CustomersList />
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

export default EditCompany;
