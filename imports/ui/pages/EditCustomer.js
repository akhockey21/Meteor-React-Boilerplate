import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Customers from '../../api/customers/customers';
import CustomerEditor from '../components/CustomerEditor';
import NotFound from './NotFound';
import container from '../../modules/container';

import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import FacilitiesListSpecific from '../components/FacilitiesSpecificList';
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

const EditCustomer= ({ customer }) => (customer ? (
    <Row>
      <Col xs={12} lg={8} lgOffset={2}>
        <Paper zDepth={1}>
          <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
            <ToolbarGroup firstChild={true}>
              <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="Edit Customer" />
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
              <h4 className="pull-left">Customer Information</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CustomerEditor customer={ customer }/>
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
          <Row>
            <Col xs={12}>
              <FacilitiesListSpecific customerID={ customer && customer._id } />
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

EditCustomer.propTypes = {
    customer: PropTypes.object,
};

export default container((props, onData) => {
    const customerId = props.params._id;
    const subscription = Meteor.subscribe('customers.view', customerId);

    if (subscription.ready()) {
        const customer = Customers.findOne(customerId);
        onData(null, { customer });
    }
}, EditCustomer);
