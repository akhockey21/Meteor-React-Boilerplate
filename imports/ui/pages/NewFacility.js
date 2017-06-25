import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacilityEditor from '../components/FacilityEditor.js';
import { Col, Row } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import container from '../../modules/container';

import CustomerEditor from '../components/CustomerEditor.js';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import CustomersList from '../components/CustomersList';
import CustomerAutoComplete from '../components/CustomerAutoComplete';
import { Alert } from 'react-bootstrap';


class NewFacility extends Component {
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

        return (
            <Row>
              <Col xs={12} lg={8} lgOffset={2}>
                <Paper zDepth={1}>
                  <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
                    <ToolbarGroup firstChild={true}>
                      <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="New Facility" />
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
                                <h4 className="pull-left">Linked Customer</h4>
                            </Col>
                            <Col xs={12}>
                                <p>Every Facility needs to be linked to a customer</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6}>
                                <CustomerAutoComplete
                                    setCustomer={this.setSelectedCustomer}/>
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
                                <FacilityEditor getCustomer={this.getCustomer.bind(this)}/>
                            </Col>
                        </Row>
                    </Paper>
                    <Paper style={style} zDepth={1}>
                        <Row>
                            <Col xs={12}>
                                <Toolbar style={{backgroundColor: "#ffffff"}}>
                                    <ToolbarGroup firstChild={true}>
                                        <ToolbarTitle style={{paddingLeft: 20}} text="Connected Devices" />
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
                                <Alert bsStyle="warning">You must connect a device to this facility on the devices page.</Alert>
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
        );
    }
}

export default NewFacility;
