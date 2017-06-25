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

import DeviceEditor from '../components/DeviceEditor.js';
import ActivityFeed from '../components/extras/justForShow/ActivityFeed';
import DevicesList from '../components/DevicesList';
import FacilityAutocomplete from '../components/FacilityAutocomplete';


class NewDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedFacility: null,
        };
        this.setSelectedFacility = this.setSelectedFacility.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    getFacility() {
        return this.state.selectedFacility;
    }

    setSelectedFacility(customer, idx) {
        this.setState({selectedFacility: customer});
    }

    render() {
        let { selectedFacility } = this.state;
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
                <Col xs={12} md={10} mdOffset={2}>
                    <Paper zDepth={1}>
                        <Toolbar style={{color: "#ffffff", backgroundColor: "#0052A5"}}>
                            <ToolbarGroup firstChild={true}>
                                <ToolbarTitle style={{paddingLeft: 20, color: "#ffffff"}} text="Add New Device" />
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <ToolbarSeparator />
                                <RaisedButton label="Do Something" primary={true} />
                            </ToolbarGroup>
                        </Toolbar>
                    </Paper>
                </Col>
                <Col xs={12} md={8} mdOffset={2}>
                    <Paper style={style} zDepth={1}>
                        <Row>
                            <Col xs={12}>
                                <h4 className="pull-left">Linked Facility</h4>
                            </Col>
                            <Col xs={12}>
                                <p>Every Device needs to be linked to a facility</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6}>
                                <FacilityAutocomplete
                                    setFacility={this.setSelectedFacility}/>
                            </Col>
                            <Col xs={1} sm={1} md={1}>
                                <p>-OR-</p>
                            </Col>
                            <Col xs={12} sm={12} md={5}>
                                <RaisedButton label="Create New Facility" primary={true} onTouchTap={this.handleOpen.bind(this)} />
                            </Col>
                        </Row>
                    </Paper>
                    <Paper style={style} zDepth={1}>
                        <Row>
                            <Col xs={12}>
                                <h4 className="pull-left">Device Information</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <DeviceEditor getFacility={this.getFacility.bind(this)}/>
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
                                <DevicesList />
                            </Col>
                        </Row>
                    </Paper>
                </Col>
                <Col xs={12} md={2}>
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
                    title="Create New Facility"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    >
                        <Row>
                            <Col xs={12}>
                                <FacilityEditor/>
                            </Col>
                        </Row>
                    </Dialog>
            </Row>
        );
    }
}


export default NewDevice;
