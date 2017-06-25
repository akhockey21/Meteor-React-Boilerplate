import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Facilities from '../../api/facilities/facilities';
import FacilityEditor from '../components/FacilityEditor';
import CustomerEditor from '../components/CustomerEditor';
import NotFound from './NotFound';
import container from '../../modules/container';

import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import CustomersList from '../components/CustomersList';
import CustomerAutoComplete from '../components/CustomerAutoComplete';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Toggle from 'material-ui/Toggle';


class EditFacility extends Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            selectedCustomer: null,
        };
        this.setSelectedCustomer = this.setSelectedCustomer.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    getCustomer() {
        return this.state.selectedCustomer;
    }

    setSelectedCustomer(customer, idx) {
        this.setState({selectedCustomer: customer});
    }

    render() {
        let { selectedCustomer } = this.state;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];

        const style = {
            height: 'auto',
            width: '100%',
            padding: 20,
            display: 'inline-block',
            marginTop: 10,
        };
        const {facility} = this.props;
        return (
            facility ? (
              <Row>
                <Col xs={12} lg={8} lgOffset={2}>
                  <Paper zDepth={1}>
                    <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
                      <ToolbarGroup firstChild={true}>
                        <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="Edit Facility" />
                      </ToolbarGroup>
                      <ToolbarGroup>
                        <ToolbarSeparator />
                        <Toggle label="Edit" style={{width: 'initial', margin: 10}} labelStyle={{color: "#fff"}} />
                        <RaisedButton label="Email" primary={false} style={{margin: 5}} />
                        <RaisedButton label="Print Invoice" primary={false} style={{margin: 5}} />
                      </ToolbarGroup>
                    </Toolbar>
                  </Paper>
                </Col>
                <Col xs={12} md={9} lg={6} lgOffset={2}>
                  <Paper style={style} zDepth={1}>
                      <Row>
                          <Col xs={12}>
                              <h4 className="pull-left">Linked Customer</h4>
                          </Col>
                          <Col xs={12}>
                              <p>Every Facility needs to be linked to a customer</p>
                          </Col>
                      </Row>
                      <Row>
                          <Col xs={12} sm={12} md={6}>
                              <CustomerAutoComplete
                                  customerId={facility.customerID}
                                  setCustomer={this.setSelectedCustomer} />
                          </Col>
                          <Col xs={1} sm={1} md={1}>
                              <p>-OR-</p>
                          </Col>
                          <Col xs={12} sm={12} md={5}>
                              <RaisedButton label="Create New Customer" primary={true} onTouchTap={this.handleOpen.bind(this)} />
                          </Col>
                      </Row>
                  </Paper>
                  <Paper style={style} zDepth={1}>
                    <Row>
                      <Col xs={12}>
                        <h4 className="pull-left">Facility Information</h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <FacilityEditor facility={ facility } getCustomer={this.getCustomer.bind(this)}/>
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
                        <CustomersList />
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
                <Dialog
                  title="Create New Customer"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                  autoScrollBodyContent={true}
                  >
                      <Row>
                          <Col xs={12}>
                              <CustomerEditor/>
                          </Col>
                      </Row>
                  </Dialog>
              </Row>
        ) : <NotFound />);
    }
}

EditFacility.propTypes = {
    facility: PropTypes.object,
};

export default container((props, onData) => {
    const facilityId = props.params._id;
    const subscription = Meteor.subscribe('facilities.view', facilityId);
    if (subscription.ready()) {
        const facility = Facilities.findOne(facilityId);
        onData(null, { facility });
    }
}, EditFacility);
